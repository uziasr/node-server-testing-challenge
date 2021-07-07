const request = require('supertest')

const server = require('./server')

const db = require('../data/dbConfig')
const {insert, remove, get, findById} = require('../smurfs/smurfsModel')
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

describe("smurfs model", function() {
    describe("insert()", function() {
      beforeEach(async () => {
        await db("smurfs").truncate();
      });
      it("should insert a smurf", async function() {
        await insert({img: 'google.com', name: "sam" });
        const smurfs = await db("smurfs"); // read from db directly
      expect(smurfs).toHaveLength(1); // at least we know one record was inserted
    });
})
    describe('remove()', function(){
        it('should remove a smurf', async function(){
            await remove(1)
            const smurfs = await db('smurfs')
            expect(smurfs[0]).toBeFalsy()
    })
    })
    describe('remove()', function(){
        it('should not remove any smurfs and return zero', async function(){
            remove(2)
            .then(res=>{
                expect(res).toEqual(0)
            })
            
    })
    })
    describe('insert()', function() {
        it('should return an array', async function(){
            insert({name: 'uzias', img:"iamnotahobbit.jpg"})
            .then(res=>{
                expect(res).toBeInstanceOf(Array)
            })

        })

    })
})

describe('server',function(){
    describe('POST /smurfs', function(){
        it('should return json formatted response', function(){
            return request(server)
            .post('/smurfs')
            .then(res=>{
                expect(res.type).toMatch(/json/i)
            })
        })
    })
})