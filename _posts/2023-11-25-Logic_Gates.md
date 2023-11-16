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
<button class="btnoff" id="button A" onclick="toggleButtonClassA()">Input A</button>
<button class="btnoff" id="button B" onclick="toggleButtonClassB()">Input B</button>
</p>

<table class="custom-table-Logic">
    <thead>
        <tr>
            <th>Visual Representation</th>
            <th>Type of Logic Gate</th>
            <th>Output</th>
        </tr>
    </thead>
    <tr>
        <td><img src="data:image/png;base64,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" alt="pic" /></td>
        <td>And Gate</td>
        <td id="and gate"></td>
    </tr>
    <tr>
        <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAACeCAMAAAB6pF0cAAAAWlBMVEX///8AAAAzKzOZqpn/1f/M1czM/8xmVWaZgJnMqsxmgGYAKwAzADMzVTPh4eG9vb1NTU2MjIzw8PDHx8fp6emamppoaGjZ2dl8fHyysrLQ0NBmqmanp6eZ1Zk5tm5lAAAKpklEQVR4nO1diYKjKBBVVPCcnvvc/f/fXKniUjGtHMqsvKTTSTpNsKyboiyKjIyMjIyMjIyMjIyMjIyMjIyMjIyMjAtBL//Hp6O5ewI3QzBOHWKQ5+Hp3OOLs4xDTZJn4tMTdynhtM6Ea6eRkON3jpI/sL4TIzyThDMPNaT0wDi1lZ+p+ZtR+ZAOMLBe8h4FUX4M/GnHMXHaPYhqiDC0m1HdfSTXo+PHTapT6Kqq7Rkhw4J4Q/s0owF8R9z+t24qBqZmROqRjuu951AQaedxvE07aeqx5xCu8OM7GZE0TEvvk9ReJ2jnmRBolZs4de9//F7o2MhTv/jw3QK9pB7hrEeLhDMss7lrq771Hwd0fYjDbHrJej28TtPd48ZMTNNbNwPtJt9RkE4qvmOJEg7RiVlyxvNiGhhoCHWorSJesgJbFPIMe3OM1ndB6NeURBAvWUiR5ULrd8yo7wJNi0Oc1RDmJw4YnFutl11RB9J3Elz9skASEQtwcinM0XOkTsYVHgqq5v+rrVYrdV5qgEOscG5whj1d0WD+nYFeuyrJxLecbqDdeox+qgCntwrBvGvMnEcSi8+kVaiJ8GfBv/AbM7CdFUCdNwLLpcF3EorfmH/03UWQ2YLPjJR++ZlImKSe6w4Jbb14MH9mLRBD36k5guueUIhBi1qrKPIyLqshZSDDcttPgPyddYoF6pP5DCcWX/Tar2Py5DqijsV3tYgaE3KRYQXPcE2anflZU0BW4amkvQnOIJX08hJivYV2N4QWHoG4DdDpmJ6JY2fBWZ5KQ6P4ed+hUGmRpTsuXjtB7cMgflQxhH4+qtoIoF0Ufd6I2CwdY9GMpn2wCW3DypOIpJXacpidPOlDJUDChk+IKAGY0MVbyMNZ0oXJG29BiXlibhfZZu0PtyjBi5N6mnah+U7OBrMC6YRma5cOprf8SH+2tskzrttABd5MnJkE5JXqeKyWgeIkT61Bz6rtj97k0QWVqVo+op/S6fduxSaEXcZlp2eIHo8K0kJBngiQgIner+w4dqTOebxY8SygEYyHDueCfpcTs94t+apc2QZpF+9IRlMsqKQgvUOExx3aOXNOVL4rRPBtjr9WD5cxYDNYyCbEwm0SYddnLSjXCnqDi1gQ18eabr6peyXyKm5TiMt3VPgBKLSiekD8rdFvXQJiO4kQpbkevs6jRDqMFmrz8Ln8DkG++kqDYWcSLANxXC+LrO9qkRFQ57urGM9ATOzqvQW9abRWbzsucmv/Lg6oKbRFZUQ843QR28HX1GAZtt/YeLh4se2sCGqJemaCyaxe1AU1YIwKrKyFR6xq8Bhi+nciJyv8gHqy+Fatl7n4sMHuR3eXFD0WuWPzXQ1eCimrnc1XrUe89nU73Lftp5Cxyz2bsMyHnoL276LpPFR4uiC5rbqqV5szPJYhP2xp98n6weZFyVKjkimnofkumuZmBsdNalFPZbfdDe7nQ7SD4cm+ZIIWdqqii28rzBh8sf9CSjF/L4Sd+D6P9Wb7Q/3u+G58E5N2cokMSTRsJEMQj9HFx13xNg/10W+Ik1D1d/GgilS3i/BIvC6EqgXD8SPAQEcRrS5gAcKZbrSoGyqXIY9BFfPZqvp+2q1sTKh4NiKQuwYbc7dK43niy+USG6suYAl0iq1WjjPeyPWgqDlv9u8C9gTC54/zQF+izH4f2r+LF12iN2J3oaZdsu7CdpI/7fp2EXGFvmMvPChcp2thi9c7N/xlHeUHH+VzxEOw4jLa7eQqzu65H5itNcHHPdcuKi6IZ1EuiV0pnO5XMKqWGBr/zO//jHcMe7jAvyv0+vnO958CSq3JeRDX7qdQoiG6naX7MtsUDnxn8ad4MPYrzuxfIsr+ihUgrz0s1yoWfyt5KeAwDoQ/mX/vPhsI6zZu8a95gO9xj8COC/IoL8uhOGlOrBdYvLuvN0lstP0VCyBvqy8xlUPzgqwHcUMwBrgmnuVyOcqqlOXXE++vvz59ohBjf8UaIstp2S3psJFgtSwEwdjvAJN0QPT12ULGs7NaW7tmDZiJ0mezo0MwFmyBoVN2P14uQOXc++W0O1yz8NmJ+ZtL7JFgjNYFY2zid/7QM9ZXsPTTuNcnRK9HKbB4S5AJ+QuT4GKbrdcC54lgjG4X6ghr1IQcUCnfK4aPgjsAxZLYKKiH04USAd9dtt/KE8GYdZHTp4NVdDuL+2dIqWZOQGjU5H32nUP65Ouhj9Y7tBN20n19Nq6Pgl9B7TtmvFy73ZUxK4D9QeeB5tONcFwRme/4+ew5zzGl37Yn3RU8z17+ejOxmzqmgu/MubWy7NMRF/h3TJ7dzWYtz10rbxY+fpF3X9NOlmU5t0mJv15hhl2cemg55tDeuxGYjXYvRBhpp00iFSJBXN1L7d+FhzgbnFyas6uWceeqD1Ay+8NCuxdJgTXf1Xj0ZKGxVD8LKMV/8VjEzaNQmMqrzOelwIY8YpuCCHFQnTQG450gA9IuZv3qizKaa1Gu9V1zsFnFHqL7d7J08X7ASVxySR/Azkas/L0iMX0MSt8p+gHbbSo6DgrhBfk7PzcgJJDvDIUH7rrVPzvGS1HrPpsgieFQGJYC0LEXrYP0xrftg6Ls5fvJ7gPw3ewuDbNzKfflMUsehcq3INFN950UrY7i6LzFPsY7QW37GBc96IEqzTRCxod3ieCNGSD7Q/A1vINkV8SPwRdiTn0ylmKTRxGZMcITOZKCtEilx4dcy5mKJLa873VRMBsG1CZZ34XPRr53YfQLuB+4gwcuIQE/veSxfv2hU3wX9rInWgL0EmICDQNWdpZD7G8zDv1Mj49BHV0EtCmxnS2uEGt4k7l2N/Mkv+k7/jKfi4/A4cXJo9QYQRL18maMC74T06nBgrqFZfHyKGizhvFf9fpmYEy2JpNHs16IK0L21VYQbDfp1zfDou8KwTwee0Aj9MBucK5jEhkUxLobFO7A90hD6fWKcHyBI6GhSCGkEFjkjVU1oNFO8CyixbOrwrEEIPluySQeLVOxEinE1JYQ++yqVHpDU2vHtuK9Vr0vEUPfUUU6/2viBISVSuKaO04KS69XBPUhMNxht/slJkx9J5d7Op/UbAx9VwvSxUzlO2DBd1hl1IPf4trSCf071SgxDET1RFXI5GECEDmdBhpCzbdKXA9xuyX6MELoO71pHZ8ZpEsHdDdF4hxv6/q7YGBlMsniBXZryFw9gXD6TnYHYCgIyZFuRTvUdLIoxol5VDwbQK/DGoiYYXKka4B2es1iJERUHDsjDN/pSp0yUdK9hk+PjzB2lqryxL+MdI4IwXeixr7uRFOFtMIJxAt7cPiaC2uE6/epqzqhvXwaYWxUuPCdut5xYbShVJQjqaxPRIdLzr1ehws1bdWi5jNUHWDFd7sFLEYpyxq0k7slPOKbvxGq3liUQr17X+uxzmzR9iCmKwy+O+/i0K6rFn0o079MeVigM9v27Qx+UYb5/kc+q3rx7I+8YkMFH+SXbpgmsooPn2MjJE73idjB8yjHabfXXv8MfHYD/q2oHXq7bDgO1VxaOeJLsNM69yjdWP8kp8QENMZhg3HhN3EtuO3jGhNrq9QuVJnx/8aC3WRo9jBrEUbknim462s3ncXDWG0N38RdHWKQjIyMjIyMjIyMjIyMjIwMA/8BmCc+cSvdr1MAAAAASUVORK5CYII=" alt="Nand Gate"/></td>
        <td> Nada Gate </td>
        <td id ="nand gate"></td>
    </tr>
    <tbody id="table_body">

    </tbody>
</table>
<script>
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
