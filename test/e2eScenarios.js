const Add = require('./../pages/addPolitician')
const List = require('./../pages/listPoliticians')
const Display = require('./../pages/displayPoliticianInfo')

  // TESTS.... 
  describe('Testing APIs...', () =>{   

      it('Add Politician', async ()=>{ 
        await Add.addPolitician()
      })
      it('Display the list of the 5 latest Politicians', async ()=>{ 
        await List.listPoliticians()
      })
      it('Display a Politician based on his ID', async ()=>{ 
        await Display.DisplayPoliticianInfo()
      })
     
})