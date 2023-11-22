---
toc: true
comments: false
layout: post
title: Logic gates
description: Example Blog!!!  This shows planning and notes from hacks.
type: plans
courses: { compsci: {week: 0} }
---

<p>
<button class="btnoff" id="button A" onclick="toggleButtonClassA();Outputandgate();Outputnandgate();Outputorgate();Outputnorgate();Outputxorgate()">Input A</button>
<button class="btnoff" id="button B" onclick="toggleButtonClassB();Outputandgate();Outputnandgate();Outputorgate();Outputnorgate();Outputxorgate()">Input B</button>
</p>
<script> // logic for button stying change
    function toggleButtonClassA() {
        var button = document.getElementById('button A');
        if (button.classList.contains('btn')) {
            button.classList.remove('btn');
            button.classList.add('btnoff');
        } else if (button.classList.contains('btnoff')) {
            button.classList.remove('btnoff');
            button.classList.add('btn');
        }
    }
        function toggleButtonClassB() {
        var button = document.getElementById('button B');
        if (button.classList.contains('btn')) {
            button.classList.remove('btn');
            button.classList.add('btnoff');
        } else if (button.classList.contains('btnoff')) {
            button.classList.remove('btnoff');
            button.classList.add('btn');
        }
    }
</script>
<html>
<table class="custom-table-Logic">
    <thead>
        <tr>
            <th>Visual Representation</th>
            <th>Type of Logic Gate</th>
            <th>Output</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr id="and gate">
        <td><img src="data:image/png;base64,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" alt="pic" /></td>
        <td>And Gate</td>
        <td>
            <p id ="and"></p>
        </td>
        <td> X can only be 1 if A & B are 1.</td>
    </tr>
    <tr>
        <td><img src="data:image/png;base64,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" alt="Nand Gate"/></td>
        <td> Nand Gate </td>
        <td>
            <p id ="nand"></p>
        </td>
        <td> It is the exact opposite of an and gate</td>
    </tr>
    <tr>
        <td><img src="data:image/png;base64,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" alt="Or Gate"/></td>
        <td> Or Gate </td>
        <td>
            <p id ="or"></p>
        </td>
        <td>a digital logic gate that gives an output of 1 when any of its inputs are 1, otherwise 0</td>    
    </tr>
    <tr>
        <td><img src="data:image/png;base64,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" alt="Nor Gate"/></td>
        <td> Nor Gate </td>
        <td>
            <p id ="nor"></p>
        </td>
        <td>The opposite of a Or gate</td>
    </tr>
    <tr>
        <td><img src="data:image/png;base64,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" alt="Xor Gate"/></td>
        <td> Xor Gate </td>
        <td>
            <p id ="xor"></p>
        </td>
        <td></td>
    </tr>
    <tbody id="table_body">

    </tbody>
</table>
</html>
<script> // logic for and gate output
    function Outputandgate(){
        var andOutput = document.getElementById('and');
        var buttonA = document.getElementById("button A")
        var buttonB = document.getElementById("button B")
        var classA = buttonA.className
        var classB = buttonB.className
        var outputand = document.createElement("td")
        if (classA == "btn" && classB == "btn") {
            var outand = "1"
        }
        else{
            var outand = "0"
        }
        document.getElementById("and").innerHTML= outand
    }
    
</script>
<script> // logic for nand gate output
    function Outputnandgate(){
        var nandOutput = document.getElementById('nand');
        var buttonA = document.getElementById("button A")
        var buttonB = document.getElementById("button B")
        var classA = buttonA.className
        var classB = buttonB.className
        var outputand = document.createElement("td")
        if (classA == "btn" && classB == "btn") {
            var outnand = "0"
        }
        else{
            var outnand = "1"
        }
        document.getElementById("nand").innerHTML= outnand
    }
    
</script>
<script> // logic for or gate output
    function Outputorgate(){
        var nandOutput = document.getElementById('or');
        var buttonA = document.getElementById("button A")
        var buttonB = document.getElementById("button B")
        var classA = buttonA.className
        var classB = buttonB.className
        var outputand = document.createElement("td")
        if (classA == "btn" || classB == "btn") {
            var outor = "1"
        }
        else{
            var outor = "0"
        }
        document.getElementById("or").innerHTML= outor
    }
    
</script>
<script> // logic for nor gate output
    function Outputnorgate(){
        var nandOutput = document.getElementById('nor');
        var buttonA = document.getElementById("button A")
        var buttonB = document.getElementById("button B")
        var classA = buttonA.className
        var classB = buttonB.className
        var outputand = document.createElement("td")
        if (classA == "btn" || classB == "btn") {
            var outnor = "0"
        }
        else{
            var outnor = "1"
        }
        document.getElementById("nor").innerHTML= outnor
    }
    
</script>
<script> // logic for xor gate output
    function Outputxorgate(){
        var nandOutput = document.getElementById('xor');
        var buttonA = document.getElementById("button A")
        var buttonB = document.getElementById("button B")
        var classA = buttonA.className
        var classB = buttonB.className
        var outputand = document.createElement("td")
        if ((classA == "btn" && classB != "btn") || (classA != "btn" && classB == "btn")) {
            var outxor = "0"
        }
        else{
            var outxor = "1"
        }
        document.getElementById("xor").innerHTML= outxor
    }
    
</script>
<html>
    <p>
        <button onclick="randominput()">start</button>
    </p>
    <p> note: For and gate type: "a"; for nand gate type: "n"; for or gate type: "o"; for nor gate type: "no";for xor gate type: "x" </p>
    <table>
        <thead>
        <tr>
            <th>Input</th>
            <th>Output</th>
            <th>Type of Logic gate(s)</th>
        </tr>
        </thead>
        <tr>
            <td>
                <p id="input"></p>
            </td>
            <td>
                <p id="output"></p>
            </td>
            <td>
                <form id="myForm">
                    <label for="textInput">Enter one possible logic gate:</label>
                    <input type="text" id="textInput" name="textInput">
                    <button type="button" onclick="checkInput()">Submit</button>
                </form>

            </td>
        </tr>
    </table>
</html>
<script>
    let a = Math.floor(Math.random() * 2)
    let b = Math.floor(Math.random() * 2)
    let c = Math.floor(Math.random() * 2)
    function randominput(){
        document.getElementById("output").innerHTML= "output: " + a
        document.getElementById("input").innerHTML= "variable a: " + a + " variable b: " + b
        if (a == 0 && b == 0){
            if (c == 1) {
                var answer = "n,no,"
            }
            else {
                var answer = "a,o,x"
            }
        }
        if (a == 1 && b == 0){
            if (c == 1) {
                var answer = "n,o,x"
            }
            else {
                var answer = "a,no"
            }
        }
         if (a == 0 && b == 1){
            if (c == 1) {
                var answer = "n,o,x"
            }
            else {
                var answer = "a,no"
            }
        }
         if (a == 1 && b == 1){
            if (c == 1) {
                var answer = "n,o,no"
            }
            else {
                var answer = "a,x"
            }
        }
    }
    function checkInput(){
        // Get the value from the textbox
        var inputValue = document.getElementById('textInput').value;
        // Check if the input is not empty
        if (inputValue.trim() !== '') {
            alert('Input is valid: ' + inputValue);
        } else {
            alert('Please enter something');
        }
    }
</script>
