const add = require('./../pages/addPolitician')
const list = require('./../pages/listPoliticians')
const search = require('./../pages/searchPoliticianInfo')

  // TESTS.... 
  describe('Testing APIs...', () =>{   

      it('Add Politician', async ()=>{ 
        await add.addPolitician()
      })
      it('Display the list of the 5 latest Politicians', async ()=>{ 
        await list.listPoliticians()
      })
      it('search a Politician based on his ID', async ()=>{ 
        await search.searchPoliticianInfo()
      })
})