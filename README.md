# holoplot-challenge


## Test cases

Pre-conditions:

1. visit https://threejs.org/examples/#webgl_instancing_performance
2. make sure the control widger is displayed and uncollapsed

- test case 1:
  1. Select method INSTANCED in Control widget
  2. Set a count of how many instance to create
  3. Verify in Performace section in Control widget, that GPU draw call is equel to 1
     
- test case 2:
  1. Select method MERGED in Control widget
  2. Set a count of how many instance to create 
  3. Verify in Performace section in Control widget, that GPU draw call is equel to 1
     
- test case 3:
  1. Select method NATIVE in Control widget
  2. Set a count of how many instance to create
  3. Verify in Performace section in Control widget, that GPU draw call is equel to instances' count



## Tools for automation

- NodeJs
- Cypress
- Typescript


## How to run tests

### Using docker image

To run tests in docker container, run the `cy-run.sh` script. The tests are run headless.

### Locally 

#### Set up

Install the dependencies using [NPM](https://www.npmjs.com/)

```bash
npm install
```
There are two options to run tests locally (without docker) :

1. Open Cypress

```bash
npm run cy:open
```

3. Headless

```bash
npm run cy:run
```
