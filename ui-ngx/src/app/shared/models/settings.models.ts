///
/// Copyright © 2016-2021 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { ValidatorFn } from '@angular/forms';
import { isNotEmptyStr, isNumber } from '@core/utils';

export const smtpPortPattern: RegExp = /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;

export interface AdminSettings<T> {
  key: string;
  jsonValue: T;
}

export declare type SmtpProtocol = 'smtp' | 'smtps';

export interface MailServerSettings {
  showChangePassword: boolean;
  mailFrom: string;
  smtpProtocol: SmtpProtocol;
  smtpHost: string;
  smtpPort: number;
  timeout: number;
  enableTls: boolean;
  username: string;
  changePassword?: boolean;
  password?: string;
  enableProxy: boolean;
  proxyHost: string;
  proxyPort: number;
  proxyUser: string;
  proxyPassword: string;
}

export interface GeneralSettings {
  baseUrl: string;
}

export interface UserPasswordPolicy {
  minimumLength: number;
  minimumUppercaseLetters: number;
  minimumLowercaseLetters: number;
  minimumDigits: number;
  minimumSpecialCharacters: number;
  passwordExpirationPeriodDays: number;
  allowWhitespaces: boolean;
}

export interface SecuritySettings {
  passwordPolicy: UserPasswordPolicy;
}

export interface UpdateMessage {
  message: string;
  updateAvailable: boolean;
}

export const phoneNumberPattern = /^\+[1-9]\d{1,14}$/;
export const phoneNumberPatternTwilio = /^\+[1-9]\d{1,14}$|^(MG|PN).*$/;

export enum SmsProviderType {
  AWS_SNS = 'AWS_SNS',
  TWILIO = 'TWILIO',
  SMPP = 'SMPP'
}

export const smsProviderTypeTranslationMap = new Map<SmsProviderType, string>(
  [
    [SmsProviderType.AWS_SNS, 'admin.sms-provider-type-aws-sns'],
    [SmsProviderType.TWILIO, 'admin.sms-provider-type-twilio'],
    [SmsProviderType.SMPP, 'admin.sms-provider-type-smpp']
  ]
);

export interface AwsSnsSmsProviderConfiguration {
  accessKeyId?: string;
  secretAccessKey?: string;
  region?: string;
}

export interface TwilioSmsProviderConfiguration {
  accountSid?: string;
  accountToken?: string;
  numberFrom?: string;
}

export interface SmppSmsProviderConfiguration {
  protocolVersion?: string,
  host?: string,
  port?: number,
  systemId?: string,
  password?: string,
  systemType?: string,
  bindType?: string,
  serviceType?: string,
  sourceAddress?: string,
  sourceTon?: number,
  sourceNpi?: number,
  destinationTon?: number,
  destinationNpi?: number,
  addressRange?: string,
  codingScheme?: number
}


export type SmsProviderConfigurations = SmppSmsProviderConfiguration & AwsSnsSmsProviderConfiguration & TwilioSmsProviderConfiguration;

export interface SmsProviderConfiguration extends SmsProviderConfigurations {
  type: SmsProviderType;
}

export function smsProviderConfigurationValidator(required: boolean): ValidatorFn {
  return control => {
    const configuration: SmsProviderConfiguration = control.value;
    let errors = null;
    if (required) {
      let valid = false;
      if (configuration && configuration.type) {
        switch (configuration.type) {
          case SmsProviderType.AWS_SNS:
            const awsSnsConfiguration: AwsSnsSmsProviderConfiguration = configuration;
            valid = isNotEmptyStr(awsSnsConfiguration.accessKeyId) && isNotEmptyStr(awsSnsConfiguration.secretAccessKey)
              && isNotEmptyStr(awsSnsConfiguration.region);
            break;
          case SmsProviderType.TWILIO:
            const twilioConfiguration: TwilioSmsProviderConfiguration = configuration;
            valid = isNotEmptyStr(twilioConfiguration.numberFrom) && isNotEmptyStr(twilioConfiguration.accountSid)
              && isNotEmptyStr(twilioConfiguration.accountToken);
            break;
          case SmsProviderType.SMPP:
            const smppConfiguration: SmppSmsProviderConfiguration = configuration;
            valid = isNotEmptyStr(smppConfiguration.protocolVersion) && isNotEmptyStr(smppConfiguration.host)
              && isNumber(smppConfiguration.port) && isNotEmptyStr(smppConfiguration.systemId) && isNotEmptyStr(smppConfiguration.password);
            break;
        }
      }
      if (!valid) {
        errors = {
          invalid: true
        };
      }
    }
    return errors;
  };
}

export interface TestSmsRequest {
  providerConfiguration: SmsProviderConfiguration;
  numberTo: string;
  message: string;
}

export function createSmsProviderConfiguration(type: SmsProviderType): SmsProviderConfiguration {
  let smsProviderConfiguration: SmsProviderConfiguration;
  if (type) {
    switch (type) {
      case SmsProviderType.AWS_SNS:
        const awsSnsSmsProviderConfiguration: AwsSnsSmsProviderConfiguration = {
          accessKeyId: '',
          secretAccessKey: '',
          region: 'us-east-1'
        };
        smsProviderConfiguration = {...awsSnsSmsProviderConfiguration, type: SmsProviderType.AWS_SNS};
        break;
      case SmsProviderType.TWILIO:
        const twilioSmsProviderConfiguration: TwilioSmsProviderConfiguration = {
          numberFrom: '',
          accountSid: '',
          accountToken: ''
        };
        smsProviderConfiguration = {...twilioSmsProviderConfiguration, type: SmsProviderType.TWILIO};
        break;
      case SmsProviderType.SMPP:
        const smppSmsProviderConfiguration: SmppSmsProviderConfiguration = {
          protocolVersion: '',
          host: '',
          port: null,
          systemId: '',
          password: '',
          systemType: '',
          bindType: 'TX',
          serviceType: '',
          sourceAddress: '',
          sourceTon: 5,
          sourceNpi: 0,
          destinationTon: 5,
          destinationNpi: 0,
          addressRange: '',
          codingScheme: 0
        };
        smsProviderConfiguration = {...smppSmsProviderConfiguration, type: SmsProviderType.SMPP};
        break;
    }
  }
  return smsProviderConfiguration;
}
