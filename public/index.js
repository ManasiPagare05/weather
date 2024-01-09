
      const currDate = document.getElementById("date");
      let weathercon = document.getElementById("weathercon");

      let tempStatus = <%= tempstat%>;

      if(tempStatus == "Sunny"){
        weathercon.innerHTML=<i class="fa-sharp fa-solid fa-sun fa-beat" style="color: #e6b00f"></i>;
      }else if(tempStatus == "Clouds" || tempStatus == "haze"){
        weathercon.innerHTML=<i class="fa-duotone fa-clouds" style="--fa-primary-color: #7ab7f0; --fa-secondary-color: #7ab7f0;"></i>;
      }else if(tempStatus == "Rainy"){
        weathercon.innerHTML =<i class="fa-solid fa-raindrops" style="color: #90b1ea;"></i>;
      }else{
        weathercon.innerHTML=<i class="fa-duotone fa-clouds" style="--fa-primary-color: #7ab7f0; --fa-secondary-color: #7ab7f0;"></i>;
      }

      function getCurrentDay() {
        let weekDay = new Array(7);
        weekDay[0] = "Sun";
        weekDay[1] = "Mon";
        weekDay[2] = "Tue";
        weekDay[3] = "Wed";
        weekDay[4] = "Thu";
        weekDay[5] = "Fri";
        weekDay[6] = "Sat";
        let currentTime = new Date();
        return weekDay[currentTime.getDay()];
      }

      function getCurrentTime() {
        var months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let now = new Date();
        let month = months[now.getMonth()];
        let date = now.getDate();

        let time = now.getHours();
        let min = now.getMinutes();
        let perios = "AM";

        if (time > 11) {
          perios = "PM";
          if (time > 12) time -= 12;
        }
        if (min < 10) {
          min = "0" + min;
        }
        return `${month} ${date} | ${time}:${min}${perios}`;
      }

      currDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();
