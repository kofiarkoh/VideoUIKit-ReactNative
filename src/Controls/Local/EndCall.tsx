import React, {useContext} from 'react';
import PropsContext from '../../Contexts/PropsContext';
import RtcContext from '../../Contexts/RtcContext';
import BtnTemplate from '../BtnTemplate';
import styles from '../../Style';
import {ClientRoleType} from 'react-native-agora';

/**
 * React Component that renders the endcall button
 * @returns Renders the endcall button
 */
const EndCall: React.FC = () => {
  const {styleProps, rtcProps} = useContext(PropsContext);
  const {localBtnStyles} = styleProps || {};
  const {endCall} = localBtnStyles || {};
  const {dispatch} = useContext(RtcContext);

  return (
    <BtnTemplate
      name={'callEnd'}
      btnText={
        rtcProps.role === ClientRoleType.ClientRoleAudience
          ? 'Stop Watching'
          : 'End Stream'
      }
      color="#FFF"
      style={{
        ...styles.endCall,
        ...(endCall as object),
        ...{
          backgroundColor: '#ee7a87',
          borderColor: 'white',
          borderWidth: 0,
        },
      }}
      onPress={() =>
        dispatch({
          type: 'EndCall',
          value: [],
        })
      }
    />
  );
};

export default EndCall;
