# Speech-To-Text
A speech to text website using JavaScript , html &amp; css

## Simple Speech to text website that supports two languages:

- English
- Arabic


##### you can visit my website by clicking [here!](https://sqox.000webhostapp.com/).
>it's only working in Google chrome, because Chrome currently takes the audio and sends it to Google’s servers to perform the transcription. This is why speech recognition is currently only supported in Chrome only.and some Chromium based browsers. like Microsoft Edge.


![image](https://user-images.githubusercontent.com/107954336/178065896-055ee68a-fe76-40cf-bda3-1c342d25c78d.png)




# wasdom-ESP32
i'm going to write algorithm for running wasdom ESP32.
So here i'm going to apply some steps to run wasdom ESP32 with Arduino.



### First step

you need to download Arduino IDE by [clicking here](https://www.arduino.cc/en/software).

### Second step

now since the wasdom ESP32 is undefined so you need to define it with Arduino by clicking on  `file > preferences`

<img width="215" alt="image" src="https://user-images.githubusercontent.com/107954336/179154195-8c0e9cca-55f3-49c6-81bd-fcd3d5eb382f.png">


now in `Additional Boards Manager URLs` put this URL then press `OK` . 
```
https://dl.espressif.com/dl/package_esp32_index.json
```
<img width="490" alt="image" src="https://user-images.githubusercontent.com/107954336/179154162-e648240a-052a-4ef0-a9f6-84387d043b97.png">


now move to `Tools > Board: "Arduino uno" > Boards manager` , maybe board option has a diffrent name but thats okay.

<img width="490" alt="image" src="https://user-images.githubusercontent.com/107954336/179154543-3a049e82-cc59-45ad-b03b-8db13f9818bc.png">

then you will get a window, type in the search bar "ESP32" then press install

<img width="598" alt="image" src="https://user-images.githubusercontent.com/107954336/179154704-25c642e3-cc03-4d2b-b6af-7982cac973d7.png">


#### now after these steps when you go to `Tools > Board: "Arduino uno"` you should find `ESP32 Arduino`.


<img width="1079" alt="image" src="https://user-images.githubusercontent.com/107954336/179155020-4f4d113d-d491-4fa9-8e27-9ffa15ca0ec9.png">


### Third step

now connect wasdom ESP32 with your computer, then go and choose `wemos D1 mini ESP32`

<img width="590" alt="image" src="https://user-images.githubusercontent.com/107954336/179155390-85241198-2029-4afb-9b7d-773ee36bf1da.png">

then connect it by clicking on:

<img width="938" alt="image" src="https://user-images.githubusercontent.com/107954336/179155631-be4b0734-cade-4348-aca2-a170335a259f.png">


### Fourth step

now we want to make sure that everything is working so we are going to make the LED turn on and off `Blink`.
by going to `file > examples > Basics > Blink`. 


<img width="509" alt="image" src="https://user-images.githubusercontent.com/107954336/179156784-30118cea-898b-495e-8312-3fd4e50625a9.png">


after that run it then we are done. :sunglasses:
