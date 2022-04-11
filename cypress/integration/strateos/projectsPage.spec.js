import ProjectsPage from '../../support/pages/ProjectsPage';


context(("Strateos application Projects page"),()=>{

    const Page = new ProjectsPage();

    before(()=>{
        Page.visitURL()
        Page.userLogin()
    })

    beforeEach(()=>{
        Cypress.Cookies.preserveOnce(Cypress.env('session_cookie'))
    })

    it(("Go to project subtab and create new project"),()=>{
        Page.openProjectsTab();
        Page.createNewProject();
        Page.enterProjectName();
        Page.submitNewProject();
    })

    it(("Assert new project created"),()=>{

        Page.openProjectsTab();
        Page.assertNewProjectName();

    })

    it(("Delete newly created Project"),()=>{

        Page.deleteFirstProject();
    })

    it(("Favourite a project and assert"),()=>{
        Page.favouriteFirstProject()
        Page.assertFavoriteProject()
    })

})