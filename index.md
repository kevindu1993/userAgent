---
layout: default
title: Web Uploader
styles:
  - /css/select2.css
scripts:
  - /js/useragent_base.js
  - /js/useragent.js
  - /js/select2.min.js
  - /js/index.js
---

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
    <div class="container" style="display:inline-block;width:1000px;float:left;">
        <h2 style="font-size:50px;">UserAgent.js</h2>
        <p>
          UserAgent.js是由Baidu WebFE(FEX)团队开发的一个用于解析UA来得到用户终端信息的JS框架。
        </p>
    </div>
    <div style="display:inline-block;float:left;margin-top:20px;">
    <img src="{{ site.baseurl }}/images/qrcode.jpg" alt="..." class="uaForPhone">
    <div style="color:white;font-size:12px;text-align: center;">扫一扫测试</div>
  </div>
      <div style="clear:both;"></div>

</div>


<div class="fetature container">
    <input id="uaInput" type="text" class="form-control" placeholder="输入或者选择下方一个UA进行尝试" aria-describedby="basic-addon1">
    <select id="uaSelect">
    </select>    
    <div id="resultText"></div>
    <div id="resultDetail">
      <div id="ua_browser" class="col-lg-3">
        <h2 class="ua_text">浏览器名称</h2>
        <div class="ua_logo">
          <img scr="{{ site.baseurl }}/images/chrome.png" width="64" height="64">
        </div>
        <h4 class="ua_item_name"></h4>
        <h4 class="ua_item_version"></h4>
      </div>
      <div id="ua_engine" class="col-lg-3">
        <h2 class="ua_text">浏览器内核</h2>
        <div class="ua_logo"></div>
        <h4 class="ua_item_name"></h4>
        <h4 class="ua_item_version"></h4>
      </div>
      <div id="ua_os" class="col-lg-3">
        <h2 class="ua_text">OS</h2>
        <div class="ua_logo"></div>
        <h4 class="ua_item_name"></h4>
        <h4 class="ua_item_version"></h4>
      </div>
      <div id="ua_device" class="col-lg-3">
        <h2 class="ua_text">硬件信息</h2>
        <div class="ua_logo"></div>
        <h4 class="ua_item_name"></h4>
        <h4 class="ua_item_version"></h4>
      </div>
    </div>

</div>