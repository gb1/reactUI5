import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  ShellBar,
  ThemeProvider,
  Input,
  List,
  StandardListItem,
  Button
} from '@ui5/webcomponents-react';
import React from 'react';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="Test React UI5 Web Components" style={{ width: "100vw" }} />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Start}
        alignItems={FlexBoxAlignItems.Center}
      >
        <Input placeholder="Add a todo" style={{ margin: "1rem" }}></Input>
        <Button
          style={{ width: '10rem', margin: "1rem" }}
          design="Default"
          disabled={false}
          icon="add"
          iconEnd={false}
          onClick={function noRefCheck() { }}
          submits={false}
        >
          Add Item
</Button>

        <List
          busy={false}
          footerText={undefined}
          header={null}
          headerText={undefined}
          infiniteScroll={false}
          inset={false}
          mode="None"
          noDataText={undefined}
          onItemClick={function noRefCheck() { }}
          onItemDelete={function noRefCheck() { }}
          onLoadMore={function noRefCheck() { }}
          onSelectionChange={function noRefCheck() { }}
          separators="All"
        >
          <StandardListItem
            iconEnd={false}
            info="3"
            infoState="None"
            selected={false}
            type="Active"
          >
            TODO 1
  </StandardListItem>
          <StandardListItem
            iconEnd={false}
            info="2"
            infoState="None"
            selected={false}
            type="Active"
          >
            TODO 2
  </StandardListItem>
          <StandardListItem
            iconEnd={false}
            info="1"
            infoState="None"
            selected={false}
            type="Active"
          >
            TODO 3
  </StandardListItem>
        </List>

      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
