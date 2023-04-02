# Butterfly
Company satisfaction survey application.

**Local Setup**

- **Setup backend.**

    1. Clone repository
        
        git clone [https://github.com/JuanRuizT/butterfly.git](https://github.com/JuanRuizT/butterfly.git)
        
    2. Go into the backend foloder
        
        cd butterfly/app-back/
        
    3.  Install node modules
        
        npm install
        
    4. Install dynamoDb packages required for local setup. It will take a moment.
        
        npx sls dynamodb install
        
    5. Run dynamo db local database. It will save the data in the ram memory.
        
        npx sls dynamodb start
        
    6. In other terminal run the seeds for inserting data to the local db
        
        npx sls dynamodb seed
        
    7. Start the local backend server
        
        npx sls offline
        
- **Setup frontend**

    1. Go into the backend foloder
        
        cd butterfly/app-front/
        
    2.  Install node modules
        
        npm install
        
    3. Start the local frontend server
        
        npm start

**Infrastructure Design**

![Infrastructure Design](https://user-images.githubusercontent.com/24280421/229319719-3b167e9e-883c-4f84-9cc8-f6936c2adb55.png)

**Database Model**

![image](https://user-images.githubusercontent.com/24280421/229319828-5285dfec-1f4b-443d-bb51-dc0fe20e9fa6.png)
