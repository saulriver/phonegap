/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Para el boton top de las paginas
//Get the button
var mybutton1 = document.getElementById("irarriba1");
var mybutton2 = document.getElementById("irarriba2");
var mybutton3 = document.getElementById("irarriba3");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton1.style.display = "block";
    } else {
    mybutton1.style.display = "none";
    }if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton2.style.display = "block";
    } else {
    mybutton2.style.display = "none";
    }if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton3.style.display = "block";
    } else {
    mybutton3.style.display = "none";
    } }
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Para mostrar la fecha
    var d = new Date(); var month = new Array(12); month[0] = 'Enero';
    month[1] = 'Febrero'; month[2] = 'Marzo'; month[3] = 'Abril';
    month[4] = 'Mayo'; month[5] = 'Junio'; month[6] = 'Julio';
    month[7] = 'Agosto'; month[8] = 'Septiembre'; month[9] = 'Octubre';
    month[10] = 'Noviembre'; month[11] = 'Diciembre';
    var todaysDate = + d.getDate() + ' de ' + month[d.getUTCMonth()] + ' del ' + d.getUTCFullYear();
    document.getElementById('fechahoy').innerHTML = 'Hoy es: ' + todaysDate;
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Para mosstrar la hora-->
    function startTime(){
        today = new Date();
        h = today.getHours();
        m = today.getMinutes();
        s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('reloj').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout('startTime()',500);}
        function checkTime(i)
        {if (i < 10) {i = "0" + i; }return i; }
        window.onload = function(){startTime(); }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Para hover en el pie de pagina
$(document).ready(function(){
    $("h5").hover(function(){
      $(this).css("background-color", "#059A00");
      }, function(){
      $(this).css("background-color", "rgba(255, 153, 0, 0.781)");
    });
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////