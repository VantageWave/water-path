import React, { Tab, Tabs } from '@nextui-org/react';
import InformationTab from './information-tab/InformationTab';
import NewsTab from './news-tab/NewsTab';
import type { DetailsTabsProps } from './DetailsTabs.types';
import DataTab from './data-tab/DataTab';

const DetailsTabs = ({ level, className }: DetailsTabsProps) => {
  return (
    <Tabs
      color="primary"
      variant="bordered"
      radius="full"
      className={className}
      fullWidth
    >
      <Tab key="info" title="Information" className="h-[100%]">
        <InformationTab level={level} />
      </Tab>
      <Tab key="news" title="News" className="h-[100%]">
        <NewsTab level={level} />
      </Tab>
      <Tab key="source" title="Data" className="h-[100%]">
        <DataTab level={level} />
      </Tab>
    </Tabs>
  );
};

export default DetailsTabs;
