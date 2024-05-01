const items = [{
    key: 'TestComponent',
    element: 'CustomElement',
    component: TestComponent,
    type: 'custom',
    field_name: 'test_component',
    name: 'Something You Want',
    icon: 'fa fa-cog',
    static: true,
    props: { test: 'test_comp' },
    label: 'Label Test',
  }, {
    key: 'MyInput',
    element: 'CustomElement',
    component: MyInput,
    type: 'custom',
    forwardRef: true,
    field_name: 'my_input_',
    name: 'My Input',
    icon: 'fa fa-cog',
    props: { test: 'test_input' },
    label: 'Label Input',
  }, 
  // Additional standard components, you don't need full definition if no modification is required. 
  {  
    key: 'Header',
  }, {
    key: 'TextInput',
  }, {
    key: 'TextArea',
  }, {
    key: 'RadioButtons',
  }, {
    key: 'Checkboxes',
  }, {
    key: 'Image',
  }];