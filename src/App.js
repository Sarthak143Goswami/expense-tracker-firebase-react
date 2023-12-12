import './App.css';
import { BrowserRouter as Router ,Route , Routes} from"react-router-dom";
import { Auth } from "./pages/auth/index"
import { ExpenseTracker } from "./pages/expense-tracker/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth/>} />
          <Route path="/expense-tracker" element={<ExpenseTracker/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//shift alt down to copy to next line


/*yarn : File C:\Users\Astral\App
Data\Roaming\npm\yarn.ps1       
cannot be loaded because        
running scripts is disabled on  
this system. For more 
information, see 
about_Execution_Policies at htt 
ps:/go.microsoft.com/fwlink/?Li 
nkID=135170.
At line:1 char:1
+ yarn start
+ ~~~~
    + CategoryInfo          :   
   SecurityError: (:) [], PSS   
  ecurityException
    + FullyQualifiedErrorId :   
   UnauthorizedAccess
   */

 //for above error run the code below

// Set-ExecutionPolicyBypass -Scope Process