---
layout: use-case
title: ᐉ 物联网智能计量解决方案 — Smart Meter Solution
description: IoT smart metering solutions ✔ Smart meter data visualization ⚫ ThingsBoard ➤ Remote monitoring and recording of energy consumption
notitle: "true"

---

{% include usecase-nav.html usecase="smart-metering" %}

<h1 class="usecase-title">物联网智能计量解决方案</h1>

## 物联网和智能仪表

传统上，智能电表是电网基础设施的一部分，是一种可以远程监控和记录能源消耗的电子设备。
然而，在物联网和物联网平台时代，独立的智能电表让位于更先进的多功能智能计量解决方案。这些解决方案提供更广泛的远程监控和警报功能，并提供强大的数据分析工具，帮助公司和个人用户优化能源、水、燃气或燃料消耗。 

对于实施智能仪表的公司来说，一个典型的挑战是如何将智能仪表集成到其基础设施中，并建立定制的智能仪表用例。
实现这些目标的最佳方法是使用物联网平台，该平台可为智能计量提供开箱即用的解决方案和模板，如 ThingsBoard。
企业级物联网平台最强大的优势之一是其数据处理能力。
您不仅可以从各种智能仪表中集中收集数据，还可以设置自定义可视化仪表板、配置用户警报和通知，并将收集到的数据输入到其他应用程序或数据存储中。

另一个关键优势是智能计量的实施成本。
使用物联网平台可以让您立即拥有所有必要的功能，并专注于构建特定的智能计量用例，从而节省时间并避免与内部物联网开发相关的风险。


## 利用 ThingsBoard 构建端到端智能计量解决方案

ThingsBoard 物联网平台提供开箱即用的组件和 API，可显著降低创建智能计量解决方案所需的工作量、 
从而大大缩短产品上市时间，提高解决方案的可靠性和竞争力。
据我们估计，利用 ThingsBoard 的以下功能和优势，企业可节省多达 90% 的产品开发时间：

  - 为您的智能水表、能源监控器、智能电表等提供可靠、容错的数据采集；
  - 强大的规则引擎可处理收集到的数据，并发出警报和提供有价值的见解；  
  - 先进的、可定制的 [数据可视化]（/docs/user-guide/visualization/），用于实时和历史智能计量监控；
  - [报警部件](/docs/user-guide/ui/widget-library/#alarm-widgets)可即时通知用户和/或操作员任何重要事件或异常消耗水平；
  - 设备管理允许您按特定属性将端点组织到 [组](/docs/user-guide/groups/)中；
  - 可定制的[最终用户仪表盘](/docs/user-guide/ui/dashboards/)（具有钻取功能），用于分析和共享智能计量监测结果；
  - 对智能电表和其他设备进行远程控制和 OTA 更新；
  - 只需少量编码工作即可定制移动应用程序;

ThingsBoard 物联网平台提供生产就绪的服务器基础设施，可连接智能电表设备，收集、存储和分析智能电表数据，并与客户和最终用户共享分析结果。

## 智能计量仪表板

以下托管在实时演示服务器上的交互式仪表盘代表智能计量物联网数据可视化，可嵌入到您的物联网项目或解决方案中。请参阅下面的仪表盘说明。

<div class="usecase-carousel owl-carousel owl-theme">
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm1.png" alt="Smart metering dashboard with a map">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm2.png" alt="Smart metering dashboard with a location">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm3.png" alt="Smart metering dashboard with a building plan">
    </div>
    <div>
        <img class="item-image" src="/images/usecases/smart-metering/sm4.png" alt="Smart metering dashbord with a thermostat controller">
    </div>
</div>

<div class="center" style="margin-bottom: 64px;">
    <a target="_blank" href="https://demo.thingsboard.io/dashboard/3a1026e0-83f6-11e7-b56d-c7f326cba909?publicId=322a2330-7c36-11e7-835d-c7f326cba909" class="button">View live demo</a>
</div>

实时仪表盘显示使用 ThingsBoard MQTT API 收集的多个智能电表和恒温器的实时数据。
收集到的数据通过规则引擎进行处理，在达到特定阈值时发出警报。
主仪表板显示多个区域，用户可以从区域深入到楼宇和公寓级别。
单击公寓级别可打开多个公寓设备的统计数据。
您可以从我们的实时演示服务器导出仪表板，并将其导入到您的 ThingsBoard 实例中。

## ThingsBoard 优势
<section class="usecase-advantages">
    <div class="usecase-background">
        <div class="bottom-features1"></div><div class="bottom-features2"></div><div class="small11"></div><div class="small12"></div>
    </div>
    <div class="cards row">
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/microservices-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/reference/msa/">可扩展性和高可用性</a>
                    <p>ThingsBoard 使用 K8S 或裸机部署，支持在云计算和企业内部数据中心进行高可用性部署。平台组件可水平扩展。ThingsBoard 已部署了超过 500 000 个智能电表。</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/telemetry-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/getting-started-guides/connectivity/">连接性</a>
                    <p>通过以下内置协议将设备直接连接到平台： HTTP、CoAP、MQTT、LwM2M 和 SNMP。使用 ThingsBoard Gateway 通过 Modbus、BLE、BACnet、OPC-UA 和其他协议将本地网络中的设备连接到云。</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/integration-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/integrations/">LoRaWAN 和 SigFox 支持</a>
                    <p>通过与 TTN、LORIOT、ChirpStack、Actility 等标准网络服务器的集成，连接 LoRaWAN 设备。通过与 SigFox 后端集成连接 SigFox 设备。</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/security-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/pe/user-guide/ssl/http-over-ssl/">安全</a>
                    <p>ThingsBoard 支持 RSA 和 ECDSA 等行业标准加密算法，确保通过 TLS(TCP) 和 DTLS(UDP) 传输数据时的安全。</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/engine-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/pe/user-guide/rule-engine-2-0/overview/">数据处理</a>
                    <p>ThingsBoard 允许您使用拖放规则链设计器定义应用逻辑。规则引擎是一个强大且可扩展的处理框架，它利用 Apache Kafka 或 AWS SQS 等行业标准消息队列实现来确保数据的持久性并保证数据处理。您可以使用规则引擎自由处理数据，也可以将数据推送到外部系统进一步处理。</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/visualization-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/dashboards/">数据可视化</a>
                    <p>使用丰富的交互式仪表盘将收集到的数据可视化。开发多状态交互式仪表盘，无需编码，内置图表、仪表、地图、表格和控制 widget。使用高级窗口小部件设置甚至自定义窗口小部件捆绑包定制仪表盘的各个方面。支持嵌入式网络套接字，可实现低延迟更新。</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/phone-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/mobile/">移动应用程序</a>
                    <p>使用基于 Flutter 的开源项目 ThingsBoard 移动应用程序，以最小的编码工作量构建自己的物联网移动应用程序。利用内置的移动操作集，可直接在仪表板中进行拍照、扫描 QR 码、更新位置等操作。</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="block">
                <object data="/images/tenancy-icon.svg"></object>
                <div>
                    <a class="title" href="/docs/user-guide/entities-and-relations/">多租户</a>
                    <p>ThingsBoard 提供用户界面和应用程序接口来管理租户、客户、用户、设备和资产。单个租户可拥有多个租户管理员以及数百万台设备和客户。它还为智能电表的 OTA 更新提供开箱即用的支持。</p>
                </div>
            </div>
        </div>
    </div>
</section>

## Smart energy solution overview

下图标识了典型智能计量解决方案的数据流和集成点，该解决方案使用 ThingsBoard 平台收集和分析来自智能电表的能源监测数据。

<object width="100%" style="max-width: max-content; margin: 32px 0" data="/images/iot-use-cases/smart-energy-diagram.svg"></object>

您可能会注意到智能仪表有很多连接选项：直接连接到云、通过物联网网关或与第三方系统集成。
该平台支持行业标准加密算法和设备凭证类型。ThingsBoard 将数据存储在容错且可靠的 Cassandra 数据库中。
规则引擎可使用 Kafka 或其他消息总线将传入数据转发至 Apache Spark 或 Hadoop 等各种分析系统。

## Learn more
<div class="usecases-bottom-nav">
    <a href="/docs/getting-started-guides/helloworld/" class="button">Getting started</a>
    <a href="/industries/smart-energy/" class="button">Customers feedback</a>
    <a href="/docs/#platform-features" class="button">Platform features</a>
    <a href="/docs/reference/" class="button">Architecture</a>
    <a href="/docs/contact-us/" class="button">Contact us</a>
</div>
