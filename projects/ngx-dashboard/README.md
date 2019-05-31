# NgxDashboard

## Installation instructions
Install from NPM:
`npm install ngx-dashboard-tammle --save`

## Usage
`import { NgxDashboardModule } from 'ngx-dashboard-tammle';`

```javascript
@NgModule({
  imports: [
    NgxDashboardModule
  ],
  ...
})
export class AppModule { }
```

### Provided Components
`<dashboard-header></dashboard-header>`

This will show your template content that passed within the opening & closing tags. E.g:

```html
  <dashboard-header>
    <p>Your content here!</p>  
  </dashboard-header>
```
Pre-made components that could compose with `<dashboard-header>`, use it, at your convenience, or build your own templates:
```html
<dashboard-header>
  <!-- @Input title: string 
       @Input imgUrl: string -->
  <header-logo
        [title]="'Home'"
        [imgUrl]="'Your Url Here'">
  </header-logo>
  
  <!-- @Input title: string 
       @Input profileLink: string
       @Input avatarUrl: string -->
  <user-avatar
        [title]="'User Avatar'"
        [profileLink]="'/'"
        [avatarUrl]="'/'"
      >
      </user-avatar>
  
  <!--Dropdown menu-->
  <user-profile></user-profile>
</dashboard-header>
```

`<dashboard-sidebar></dashboard-sidebar>`

Comes with default template. You can also customize the template if needed. E.g:
```html
<dashboard-sidebar [sidebarTemplate]="customSidebar"></dashboard-sidebar>
    <ng-template #customSidebar>
      Customized template here!
    </ng-template>
```

`<dashboard-footer></dashboard-footer>` - Static content, non-configurable.

`<dashboard-login></dashboard-login>`

Callback `loginSubmitted` provided with `User` model as argument, use this to handle business on form submitted.E.g: 

```html
<dashboard-login (loginSubmitted)="showProfilePopup($event)"></dashboard-login>
```

### Build
The src files for the library lives under projects/ngx-dashboard/src/lib directory. 

`ng build NgxDashboardTammle`

### Publish
Change your terminal working directory to /dist/ngx-dashboard. Then run:

`npm publish`

