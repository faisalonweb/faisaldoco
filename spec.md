# Design Spec

## Development

* MERN stack (MongoDB, Express, React, Node) 
* Written with TypeScript
* React and redux-toolkit
* MaterialUI for layout
* GitHub for code management
* GitHub Actions for CI
* Agile development - 2 week sprints

## Functionality

### Documentation (reading + writing)

* Users can view a rendered markdown document in a page
* Users can see all the markdown pages which make a set of documentation (tree view)
* Users can select a page in the tree view to view a different page of documentation
* The documentation page shows **when** the documentation was last published
* The documentation page shows **where** the documentation was last pubished to
* A user can have documentation for different projects
* A user can view all of their projects in their user account
* A user can select a project to view, which brings up the relevant documentation

### Reviewing

* Users can click a button to publish documentation (to doc hosting service)
  * The publish button brings up a confirmation showing user where to be published to
* Users can click a button to share the documentation
  * Share button brings up a modal box
  * Users can type the name of a team member to share it to
  * If the team member exists in the team, it suggests fill-in of name
  * The user can invite a team member to view, which sends an email notification
  * The user can copy a sharing link to the documentation
  * Anybody with the link who is part of the team can view the documentation

### Team / organisation

* A user can create a user account
* A user can create an organisation within their account
* A user can invite people via email to join their organisation
  * rules of acceptance TBD
* A user has an organisation view which shows members of their organisation
* A user can create different roles in an organisation with different permissions
  * The user which creates an org is the "owner" (full admin permissions)
  * Other members of the org are by default "member" (read only - cannot share or publish)

## UX

* Colour scheme is TBD
* Responsive design
* Screen sizes from laptop to large monitor
  * No explicit mobile / tablet support
