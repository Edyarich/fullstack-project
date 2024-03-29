# FullStackProject
*Description*: Ches Club Website

## Installation guide for Ubuntu 20.04

### Prerequisities
**Memory:** 
Anaconda - 3 Gb  
Conda environment: 1 Gb  
Node + npm + git repo: 1 Gb  

**Programs:**
Git

### Setting the environment
0. Install conda from the [official cite](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html)
1. `conda create --name <env_name> --file conda_packages.txt`
2. `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -`
   `sudo apt-get install -y nodejs`
3. `git clone https://github.com/Edyarich/fullstack-project.git`

### Start the backend
1. `cd backend_src`
2. `conda activate <env_name>`
3. `python manage.py runserver`

### Start the frontend
1. `cd frontend_src`
2. `npm install`
3. `npm start`

### How to reinstall react
1. `sudo npm uninstall -g create-react-app`
2. `sudo npm rm -g create-react-app`
3. `sudo npm install`
4. `sudo npm install -g create-react-app`
5. `npx create-react-app my-app`
