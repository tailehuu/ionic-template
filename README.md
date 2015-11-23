# ionic-template

## Sample layout

### No side menu

{{#ionBody}}
    {{> ionNavBar}}
    
    {{#ionNavView}}
        {{> yield}}
    {{/ionNavView}}
    
    {#ionTabs}}
        {{> ionTab title="Search" path="home" icon="android-search"}}
        {{> ionTab title="Messages" path="messages" icon="android-chat"}}
        {{> ionTab title="Account" path="account" icon="android-person"}}
    {{/ionTabs}}
{{/ionBody}}