# Example NestJS microservice project

!!! WARNING: Currently not working, see the known issues section.

## Description
This is an example project how to write microservices with NestJS. 
The program use the [Open meteo](https://open-meteo.com/) API to poll the current weather of a hungarian village called Lovas, and store it in memory.
The program contains two microservice. The data-streams provide an /start http rest endpoint to start a request to the Open meteo for the current weather info, and also provide a /list endpoint where the previously asked whether information can be viewed. The other microservice called worker, that is used by the data-streams to fetch the weather information.

## DEMO

Here you can see a demo how to use the tool:
https://drive.google.com/file/d/1rDEnCS4oeyYWXEGoOWJZScnPPRV3BMTx/view?usp=drive_link

## How to install

- Install the latest nodejs: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
- Install yarn package manager: https://classic.yarnpkg.com/lang/en/docs/install/ 
- Run the yarn install command: https://classic.yarnpkg.com/en/docs/cli/install

## How to use

Start the data-streams with the following command. It will listen on the 5000 TCP port
```
yarn start
```
Start the data-streams with the following command. It will listen on the 5001 TCP port
```
yarn start worker
```
Now you can use the http://localhost:5000/start to start a weather information fetch.
In the workers log, you can see the fetched data.
Unfortunatelly, currently the /list endpoint not working, cause the worker -> data-streams communication is broken.

## Known issues

- When worker triggers the store_temperature event, then the data-streams not getting triggered.
- Maybe the yarn install will fail with the following issue, then try to remove the yarn.lock file. https://github.com/yarnpkg/yarn/issues/8994

## Possible future development

- Add tests
- Add docker-compose support
- Replace in memory weather info store in data-streams with an external storage service
- Add scheduling feature to ask whether info in periods
- Add exception handling
- Add improved logging
- Separate data-streams into to microservice, so the users and the worker service wont use the same TCP port

## Licence

Open meteo non-commercial licence mentions the following:

By using the Free API for non-commercial use you agree to following terms:
- Less than 10'000 API calls per day, 5'000 per hour and 600 per minute.
- You may only use the free API services for non-commercial purposes.
- You accept to the CC-BY 4.0 license, as specified in the license conditions.
- We reserve the right to block applications and IP addresses that misuse our service without prior notice.

https://open-meteo.com/en/terms