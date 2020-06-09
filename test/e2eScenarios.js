const add = require('../integration/addPolitician')
const list = require('../integration/listPoliticians')
const search = require('../integration/searchPoliticianInfo')

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