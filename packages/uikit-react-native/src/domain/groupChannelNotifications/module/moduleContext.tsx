import React, { createContext } from 'react';

import { useLocalization } from '@sendbird/uikit-react-native';
import type { SendbirdGroupChannel } from '@sendbird/uikit-utils';

import ProviderLayout from '../../../components/ProviderLayout';
import type { GroupChannelNotificationsContextsType, GroupChannelNotificationsModule } from '../types';

export const GroupChannelNotificationsContexts: GroupChannelNotificationsContextsType = {
  Fragment: createContext({
    headerTitle: '',
    channel: {} as SendbirdGroupChannel,
  }),
};

export const GroupChannelNotificationsContextsProvider: GroupChannelNotificationsModule['Provider'] = ({
  children,
  channel,
}) => {
  const { STRINGS } = useLocalization();

  return (
    <ProviderLayout>
      <GroupChannelNotificationsContexts.Fragment.Provider
        value={{ channel, headerTitle: STRINGS.GROUP_CHANNEL_NOTIFICATIONS.HEADER_TITLE }}
      >
        {children}
      </GroupChannelNotificationsContexts.Fragment.Provider>
    </ProviderLayout>
  );
};
