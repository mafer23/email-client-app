# Stage Back End 

There are some steps that needs to be followed in order to work in the backend part:

### Step 1: Open a terminal with the directory of the backend part

If you already clone the repository, open a terminal in the directory in which the project is saved and the move to the backend folder. 

### Step 2: Virtual enviorement creation

Now, run the next command in the terminal:

    python -m venv env
    
This command will create a virtual enviorement to mantin the packets in one place, and also to prevent it to install in the PC.

### Step 3: Install the project

    pip install -e .
    
This command will install the project, which is necesary in order to help the virtual enviorement to recognize the structure of the project, and also to avoid cache problems with tests.

### Step 4: Install the dependencies

With the project installed, it's necesary to install the project dependencies. For these purpose run the next command:

    pip install -r requirements.txt
    
### Step 5: To keep in mind

Whe new dependencies are added to the project, it's important to update the requirements file. These can be achieved throught the next command:

    pip freeze -r > requirements.txt
    
For running test you can use the next command:

    pytest
    
It will run all the test in the project.

# Stage Front End 

It's important that you review the following steps to run the front end. 

### Step 1: Open project with terminal
In this step you need to open the terminal or consola on your computer. After, you must enter the path of the folder where the front end project is located. The following is an example image:

![](https://drive.google.com/uc?export=view&id=1TAJ6AHHAFw8xOT6sIRu9A4KRLXQtNwSX)

### Step 2: Installing project dependencies VITE + REACT
Once the previous step is completed, it's necessary to install the project dependencies. Therefore, run the following command:

```
npm install
```
This installs all dependencies that the project needs. 

![](https://drive.google.com/uc?export=view&id=12YHG-BMntdOCAbDiW1MqKJdRm4pTO7cx)

### Step 3: Run Scripts
In this step you must execute some scripts depending on the case. But, first see this image: 

![](https://drive.google.com/uc?export=view&id=10LT27wOVlBqSNRN32SPf8RGOaL97qPQC)

The most important scripts are **"dev"**, **"start"**, **"test:watch"** and **"test"**. Use each one according to the case.

With the following script you can run the project in developer mode:
```
npm run dev
```
With the following script you can run the project starting with tests and then running the application:

```
npm run start
```

With the following script you can run the project in test mode. However, in this case every time something is changed in the test, the changes applied automatically:

```
npm run test:watch
```

With the following script you can run the project in test normal mode:
```
npm run test
```
