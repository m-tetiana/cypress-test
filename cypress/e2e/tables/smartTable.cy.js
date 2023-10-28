import {SmartTablePage} from '../../pageObjects/tables/SmartTablePage';

describe('Smart table', () => {
  it('should add new record to the table, check that data is added, edit data and then check edited data', () => {
    const smartTablePage = new SmartTablePage()

    smartTablePage.navigate()
    smartTablePage.clickAddButton()
    smartTablePage.fillNewUserData(100, 'Mike', 'Wazowski', 'mike', 'mike.wazowski@monster.co', 25)
    smartTablePage.clickCreateButton()
    smartTablePage.checkUserAtRow(1, 100, 'Mike', 'Wazowski', 'mike', 'mike.wazowski@monster.co', 25)
    smartTablePage.clickEditButtonAtRow(1)
    smartTablePage.editFieldAtRow(1, 'Username', 'mikewazowski')
    smartTablePage.clickSaveButtonAtRow(1)
    smartTablePage.checkUserAtRow(1, 100, 'Mike', 'Wazowski', 'mikewazowski', 'mike.wazowski@monster.co', 25)
  })
})
