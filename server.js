const http = require('http');

http.createServer((request, response)=>{
    const url = request.url;
    const method = request.method.toLowerCase();
    let body;
    console.log(url);
    console.log(method)
    if(method === 'options'){
        response.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST'
        });
        response.end();
    }else{
        if(url === '/api/login'){
            response.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type'
            });
            body = {
                username: '庄严',
                permission: 'WORKSHOP_ADMIN',
                pages: 'A01,B02,B03',
                company: '星锐',
                token: 'ASDSAF=ASDF-FFG'
            };
        }else if(url === '/api/companyList'){
    
        }
        response.end(JSON.stringify(body));
    }
}).listen(8888);