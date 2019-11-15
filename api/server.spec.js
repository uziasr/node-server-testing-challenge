const request = require('supertest')

const server = require('./server')

// it('should set db environment to testing', function(){
//     expect(process.env.DB_ENV).toBe('testing')
// })

describe('server', function(){
    describe('GET /', function(){
        it('should return "api": "up"', function(){
            return request(server)
            .get('/')
            .then(res=>{
                expect(res.status).toBe(200)
            })
        })
    })
})

describe('server', function(){
    describe('GET /smurfs', function(){
        it('should return all smurfs', function(){
            return request(server)
            .get('/smurfs')
            .then(res=>expect(res.status).toBe(200))
        })
    })
})

describe('server', function(){
    describe('GET /smurfs', function(){
        it('should return', function(){
            return request(server)
            .get('/smurfs')
            .then(res=>{
                expect(res.type).toMatch(/json/i)
            })
        })
    })
})

// describe('server', function(){
//     describe('POST /smurfs', function(){
//         it('should return', function(){
//             return request(server)
//             .post('/smurfs')
//             .then(res=>expect(res.body.count).toBe(1))
//         })
//     })
// })

describe("smurfs model", function() {
    describe("insert()", function() {
      beforeEach(async () => {
        await db("smurfs").truncate();
      });
      it("should insert a smurf", async function() {
        await db.insert({ name: "samd", img: 'google.com' });
        const smurfs = await db("smurfs"); // read from db directly
      expect(smurfs).toHaveLength(1); // at least we know one record was inserted
    });
})
})