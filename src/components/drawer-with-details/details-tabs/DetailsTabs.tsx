import React, { Tab, Tabs } from '@nextui-org/react';
import InformationTab from './information-tab/InformationTab';
import NewsTab from './news-tab/NewsTab';
import type { DetailsTabsProps } from './DetailsTabs.types';
import DataTab from './data-tab/DataTab';
import { defineMessages, useIntl } from 'react-intl';

const DetailsTabs = ({ level, className }: DetailsTabsProps) => {
  const { formatMessage } = useIntl();
  return (
    <Tabs
      color="primary"
      variant="bordered"
      radius="full"
      className={className}
      fullWidth
    >
      <Tab
        key="info"
        title={formatMessage(messages.information)}
        className="h-[100%]"
      >
        <InformationTab level={level} />
      </Tab>
      <Tab key="news" title={formatMessage(messages.news)} className="h-[100%]">
        <NewsTab level={level} />
      </Tab>
      <Tab
        key="source"
        title={formatMessage(messages.source)}
        className="h-[100%]"
      >
        <DataTab level={level} />
      </Tab>
    </Tabs>
  );
};

const messages = defineMessages({
  information: {
    id: 'src.components.drawer-with-details.information',
    defaultMessage: 'Information',
  },
  news: {
    id: 'src.components.drawer-with-details.news',
    defaultMessage: 'News',
  },
  source: {
    id: 'src.components.drawer-with-details.source',
    defaultMessage: 'Source ',
  },
});

export default DetailsTabs;
