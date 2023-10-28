import {BasePage} from '../BasePage';


export class SmartTablePage extends BasePage {
  _addButtonSelector = 'table .ng2-smart-action.ng2-smart-action-add-add.ng-star-inserted'
  _createButtonSelector = 'table thead > tr:last-of-type a.ng2-smart-action-add-create'

  _getCreateInputFieldSelector(placeholder) {
    return `table thead > tr:last-of-type input[placeholder = '${placeholder}']`
  }

  _getTableBodyCellSelector(row, column) {
    return `table tbody > tr:nth-of-type(${row}) > td:nth-of-type(${column})`
  }

  _getEditButtonSelector(row) {
    return `table tbody > tr:nth-of-type(${row}) a.ng2-smart-action-edit-edit`

  }

  _getEditInputFieldSelector(row, placeholder) {
    return `table tbody > tr:nth-of-type(${row}) input[placeholder = '${placeholder}']`
  }

  _getSaveButtonSelector(row) {
    return `table tbody > tr:nth-of-type(${row}) a.ng2-smart-action-edit-save`
  }

  constructor() {
    super('pages/tables/smart-table');
  }

  clickAddButton() {
    cy.get(this._addButtonSelector).click()
  }

  fillNewUserData(id, firstName, lastName, username, email, age) {
    cy.get(this._getCreateInputFieldSelector('ID')).type(id)
    cy.get(this._getCreateInputFieldSelector('First Name')).type(firstName)
    cy.get(this._getCreateInputFieldSelector('Last Name')).type(lastName)
    cy.get(this._getCreateInputFieldSelector('Username')).type(username)
    cy.get(this._getCreateInputFieldSelector('E-mail')).type(email)
    cy.get(this._getCreateInputFieldSelector('Age')).type(age)
  }

  clickCreateButton() {
    cy.get(this._createButtonSelector).click()
  }

  checkUserAtRow(row, id, firstName, lastName, username, email, age) {
    cy.get(this._getTableBodyCellSelector(row, 2)).should('have.text', id)
    cy.get(this._getTableBodyCellSelector(row, 3)).should('have.text', firstName)
    cy.get(this._getTableBodyCellSelector(row, 4)).should('have.text', lastName)
    cy.get(this._getTableBodyCellSelector(row, 5)).should('have.text', username)
    cy.get(this._getTableBodyCellSelector(row, 6)).should('have.text', email)
    cy.get(this._getTableBodyCellSelector(row, 7)).should('have.text', age)
  }

  clickEditButtonAtRow(row) {
    cy.get(this._getEditButtonSelector(row)).click()
  }

  editFieldAtRow(row, placeholder, newValue) {
    cy.get(this._getEditInputFieldSelector(row, placeholder)).clear().type(newValue)
  }

  clickSaveButtonAtRow(row) {
    cy.get(this._getSaveButtonSelector(row)).click()
  }
}
