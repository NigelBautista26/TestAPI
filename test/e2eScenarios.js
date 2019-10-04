const base = require('../base')

  // TESTS.... 
  describe('Testing APIs...', () =>{   

      it('Add Politician', async ()=>{ 
        await base.addPolitician()
      })
      it('Display the list of the 5 latest Politicians', async ()=>{ 
        await base.listPoliticians()
      })
      it('Display a Politician based on his ID', async ()=>{ 
        await base.DisplayPoliticianInfo()
      })
     
})