import BasePage from './BasePage';
import projectLocators from '../../fixtures/locators/project_page.json';
import projectsData from '../../fixtures/data/projects_page.json';

export default class ProjectsPage extends BasePage {
   
    openProjectsTab() {
        this.clickOnDOMElText(projectLocators.projectTab.el,projectLocators.projectTab.text)
    }

    createNewProject() {
        this.clickOnDomElement(projectLocators.newProjectSquare);
    }

    enterProjectName() {
        this.typeTextonDom(projectLocators.newprojectNameInput, projectsData.newProjectName);
    }

    submitNewProject() {
        this.clickOnDOMElText(projectLocators.submitButton.el,projectLocators.submitButton.text);
    }

    assertNewProjectName() {
        this.seesTextInChildDom(projectLocators.firstProjectSquareCard,projectLocators.projectHeader,projectsData.newProjectName)
    }

    deleteFirstProject(){
        this.mouseOverToDomAndReturnDom(projectLocators.firstProjectSquareCard).then(el=>{
                this.clickOnChildDom(el,projectLocators.actionMenu)
        })

        

            this.clickOnDomElement(projectLocators.deleteProjectOption)
                .clickOnDOMElText(projectLocators.destroyButton.el,projectLocators.destroyButton.text)
    }

    favouriteFirstProject() {
        this.clickOnChildDom(projectLocators.firstProjectSquareCard,projectLocators.favoriteIcon);
    }

    assertFavoriteProject() {
        this.clickOnDomElement(projectLocators.starredProjectFilter)
             .hasLengthOfDom(projectLocators.projectSquareCard,1)
    }
}