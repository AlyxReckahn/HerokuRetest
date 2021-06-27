const app_name = 'cop4331-demo2';
function buildPath(route)
{    
    if (process.env.NODE_ENV === 'production')     
    {        
        return 'https://' + app_name +  '.herokuapp.com/' + route;
    }    
    else    
    {                
        return 'http://localhost:5000/' + route;    
    }
}