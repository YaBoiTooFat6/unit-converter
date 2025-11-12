import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import KryComponent from "./KryComponent/KryComponent.jsx";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MakComponent } from "./MakComponent/component.jsx";

const Units = () => {
  const [value, setValue] = useState(0);

  return (
    <Tabs>
      <TabList>
        <Tab>Kilometre &rarr; Mile (Oliwier)</Tab>
        <Tab>Degree &rarr; Grad (Krystian)</Tab>
        <Tab>PLN &rarr; EURO (Kuba)</Tab>
        <Tab>Litre &rarr; Galon (Wiktor)</Tab>
        <Tab>Newtons &rarr; Poundals (Igor)</Tab>
        <Tab>Pascal &rarr; Bar (Maks)</Tab>
        <Tab>Kg &rarr; Pound (Xawier)</Tab>
        <Tab>Fahreiheit &rarr; Celsius (Dominik)</Tab>
      </TabList>

      <input
        type="number"
        value={value}
        step="0.1"
        onChange={(e) => setValue(e.target.value)}
      />

      <TabPanel>
        <h2>Any content 1 {value}</h2>
        {/* <OliComponent value={value} /> */}
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
        {<KryComponent value={value} />}
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
        {/* <KubComponent value={value} /> */}
      </TabPanel>
      <TabPanel>
        <h2>Any content 4</h2>
        {/* <WikComponent value={value} /> */}
      </TabPanel>
      <TabPanel>
        <h2>Any content 5</h2>
        {/* <IgoComponent value={value} /> */}
      </TabPanel>
      <TabPanel>
        <h2>Pascal-Bar converter</h2>
        {<MakComponent value={value} />} pa
      </TabPanel>
      <TabPanel>
        <h2>Any content 7</h2>
        {/* <XawComponent value={value} /> */}
      </TabPanel>
      <TabPanel>
        <h2>Any content 7</h2>
        {/* <DomComponent value={value} /> */}
      </TabPanel>
    </Tabs>
  );
};

export default Units;
