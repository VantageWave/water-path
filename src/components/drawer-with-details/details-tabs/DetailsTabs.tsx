import React, { Tab, Tabs } from '@nextui-org/react';
import InformationTab from './information-tab/InformationTab';
import NewsTab from './news-tab/NewsTab';
import type { DetailsTabsProps } from './DetailsTabs.types';

const DetailsTabs = ({ level }: DetailsTabsProps) => {
  return (
    <Tabs color="primary" variant="bordered" radius="full" fullWidth>
      <Tab key="info" title="Information" className="h-[100%]">
        <InformationTab level={level} />
      </Tab>
      <Tab key="news" title="News">
        <NewsTab level={level} />
      </Tab>
    </Tabs>
  );
};

export default DetailsTabs;
