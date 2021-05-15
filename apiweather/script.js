let url = "https://api.weatherbit.io/v2.0/current?";

let APIkey = "5d9b7d11812b4df896479f0e4282bd36";
let city_dropdown = document.querySelector("#city");
let info = document.querySelector(".info_div");


var cities = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmadabad",
    "Surat",
    "Lucknow",
    "Jaipur",
    "Cawnpore",
    "Mirzapur",
    "Nagpur",
    "Ghaziabad",
    "Indore",
    "Vadodara",
    "Vishakhapatnam",
    "Bhopal",
    "Chinchvad",
    "Patna",
    "Ludhiana",
    "agra",
    "Kalyan",
    "Madurai",
    "Jamshedpur",
    "Nasik",
    "Faridabad",
    "Aurangabad",
    "Rajkot",
    "Meerut",
    "Jabalpur",
    "Thane",
    "Dhanbad",
    "Allahabad",
    "Varanasi",
    "Srinagar",
    "Amritsar",
    "Aligarh",
    "Bhiwandi",
    "Gwalior",
    "Bhilai",
    "Haora",
    "Ranchi",
    "Bezwada",
    "Chandigarh",
    "Mysore",
    "Raipur",
    "Kota",
    "Bareilly",
    "Jodhpur",
    "Coimbatore",
    "Dispur",
    "Guwahati",
    "Solapur",
    "Trichinopoly",
    "Hubli",
    "Jalandhar",
    "Bhubaneshwar",
    "Bhayandar",
    "Moradabad",
    "Kolhapur",
    "Thiruvananthapuram",
    "Saharanpur",
    "Warangal",
    "Salem",
    "Malegaon",
    "Kochi",
    "Gorakhpur",
    "Shimoga",
    "Tiruppur",
    "Guntur",
    "Raurkela",
    "Mangalore",
    "Nanded",
    "Cuttack",
    "Chanda",
    "Dehra Dun",
    "Durgapur",
    "asansol",
    "Bhavnagar",
    "Amravati",
    "Nellore",
    "Ajmer",
    "Tinnevelly",
    "Bikaner",
    "Agartala",
    "Ujjain",
    "Jhansi",
    "Ulhasnagar",
    "Davangere",
    "Jammu",
    "Belgaum",
    "Gulbarga",
    "Jamnagar",
    "Dhulia",
    "Gaya",
    "Jalgaon",
    "Kurnool",
    "Udaipur",
    "Bellary",
    "Sangli",
    "Tuticorin",
    "Calicut",
    "Akola",
    "Bhagalpur",
    "Sikar",
    "Tumkur",
    "Quilon",
    "Muzaffarnagar",
    "Bhilwara",
    "Nizamabad",
    "Bhatpara",
    "Kakinada",
    "Parbhani",
    "Panihati",
    "Latur",
    "Rohtak",
    "Rajapalaiyam",
    "Ahmadnagar",
    "Cuddapah",
    "Rajahmundry",
    "Alwar",
    "Muzaffarpur",
    "Bilaspur",
    "Mathura",
    "Kamarhati",
    "Patiala",
    "Saugor",
    "Bijapur",
    "Brahmapur",
    "Shahjanpur",
    "Trichur",
    "Barddhaman",
    "Kulti",
    "Sambalpur",
    "Purnea",
    "Hisar",
    "Firozabad",
    "Bidar",
    "Rampur",
    "Shiliguri",
    "Bali",
    "Panipat",
    "Karimnagar",
    "Bhuj",
    "Ichalkaranji",
    "Tirupati",
    "Hospet",
    "aizawl",
    "Sannai",
    "Barasat",
    "Ratlam",
    "Handwara",
    "Drug",
    "Imphal",
    "Anantapur",
    "Etawah",
    "Raichur",
    "Ongole",
    "Bharatpur",
    "Begusarai",
    "Sonipat",
    "Ramgundam",
    "Hapur",
    "Uluberiya",
    "Porbandar",
    "Pali",
    "Vizianagaram",
    "Puducherry",
    "Karnal",
    "Nagercoil",
    "Tanjore",
    "Sambhal",
    "Shimla",
    "Ghandinagar",
    "Shillong",
    "New Delhi",
    "Port Blair",
    "Gangtok",
    "Kohima",
    "Itanagar",
    "Panaji",
    "Daman",
    "Kavaratti",
    "Panchkula",
    "Kagaznagar",
  ];

  function loadCities() {
    for (i = 0; i < cities.length; i++) {
      let city = document.createElement("option");
      city.innerText = cities[i];
      city_dropdown.append(city);
    }
  }
  
  async function getData() {
    if (city_dropdown.value === "--select--") {
      alert("Please select city");
    } else {
      try {
        let res = await fetch(url + `city=${city_dropdown.value}&key=${APIkey}`, {
          //${city_dropdown.value}
          method: "GET",
          body: JSON.stringify(),
          headers: {
            "Content-type": "application/json",
          },
        });

        let data = await res.json();
      info.innerHTML = `<div class="col-6 information">
      <b class="label">Sunrise</b>
      <span class="value">${data.data[0].sunrise}</span></br>
      <b class="label">Wind Direction</b>
      <span class="value">${data.data[0].wind_cdir_full}</span></br>
      <b class="label">Temperature</b>
      <span class="value">${data.data[0].temp} Celsius</span> </br>
      <b class="label">Pressure</b>
      <span class="value">${data.data[0].pres} mb </span></br>
      <b class="label">Clouds</b>
      <span class="value">${data.data[0].weather.description}</span></br>
      <b class="label">Dew Point</b>
      <span class="value">${data.data[0].dewpt} Celcius </span></br>
      </div>
      <div class="col-6 information">
      <b class="label">Sunset</b>
      <span class="value">${data.data[0].sunset}</span></br>
      <b class="label">Wind Speed</b>
      <span class="value">${data.data[0].wind_spd} m/s</span></br>
      <b class="label">Visibility</b>
      <span class="value">${data.data[0].vis} KM </span></br>
      <b class="label">Sea Level Pressure</b>
      <span class="value">${data.data[0].slp} mb </span></br>
      <b class="label">Clouds Coverage</b>
      <span class="value">${data.data[0].clouds} %</span></br>
      <b class="label">Part of Day</b>
      <span class="value">${data.data[0].pod} (d-day/n-night)</span></br>
      </div>`;
      console.log(data.data[0]);
    } catch (err) {
      console.log(err);
    }
  }
}

getData();