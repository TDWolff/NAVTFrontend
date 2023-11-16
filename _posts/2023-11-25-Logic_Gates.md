---
toc: true
comments: false
layout: post
title: Logic gates
description: Example Blog!!!  This shows planning and notes from hacks.
type: plans
courses: { compsci: {week: 0} }
---


<button class="button-off" id="button A" onclick="toggleButtonClassA()">Input A</button>
<button class="button-off" id="button B" onclick="toggleButtonClassB()">Input B</button>
<table class="custom-table-Logic">
    <thead>
        <tr>
            <th>Visual Representation</th>
            <th>Type of Logic Gate</th>
            <th>Output</th>
        </tr>
    </thead>
    <tbody id="table_body">

    </tbody>
</table>
<script>
    function toggleButtonClassA() {
        var button = document.getElementById('button A');

        if (button.classList.contains('button-off')) {
            button.classList.remove('button-off');
            button.classList.add('button-on');
        } else if (button.classList.contains('button-on')) {
            button.classList.remove('button-on');
            button.classList.add('button-off');
        }
    }
    function toggleButtonClassB() {
        var button = document.getElementById('button B');

        if (button.classList.contains('button-off')) {
            button.classList.remove('button-off');
            button.classList.add('button-on');
        } else if (button.classList.contains('button-on')) {
            button.classList.remove('button-on');
            button.classList.add('button-off');
        }
    }

</script>
