# Air Quality Health 🏆 *1st Place Winner of EMP Hackfest 2023*
## What It Does
Our web app displays the local air quality index in a way that's visually clear and easy to understand. The number at the top serves as an immediate indicator of the current air quality in your area. 
Additionally, a bar graph visually pinpoints the pollutants responsible for the poor air quality. For a more personalized experience, we offer a textbox where you can input your pre-existing health conditions. 
Leveraging the power of the OpenAI API, our website will provide you with tailored recommendations on how to safeguard your well-being amidst varying air quality conditions.

This is our interface's design, as planned on Figma:

<img width="786" height="528" alt="aqi3" src="https://github.com/user-attachments/assets/32619f19-c144-43f9-af59-cf9cd5b26911" />



Here is the user interface of our completed web app, and an example of how the colors change dynamically based on the severity of the air quality:

<img width="2880" height="1616" alt="aqi2" src="https://github.com/user-attachments/assets/26d53a24-ffdf-445d-8d3d-fbf6b0a9f3dc" />
<img width="2880" height="1616" alt="aqi1" src="https://github.com/user-attachments/assets/ac457469-c9be-43f9-977c-a7cf405733d7" />


## Development Process
We started by mapping out what we wanted our app to look like through sketches, then finalized a cleaner design using Figma. 
Using HTML, Javascript, and CSS, we started implementing the designs into the actual webpage. 
We also use the OpenAI, weather and AQI apis to collect data. Weaving together front-end and back-end design, we successfully 
created the calculated AQI displayed on the webpage.

Check out our [Devpost submission](https://devpost.com/software/air-quality-health) for more details!

## Challenges We Ran Into
One of the primary challenges our team encountered revolved around calculating the Air Quailty Index. This involved the meticulous 
process of determining average concentration values for various pollutants and applying the formula PV = nRT to derive the AQI.
