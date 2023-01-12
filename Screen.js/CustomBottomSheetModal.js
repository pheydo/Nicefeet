
// @flow
import React, { memo, useCallback, useMemo, useRef } from "react";
import { StyleSheet, View } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";


const CustomBottomSheetModal = ({ children, modalRef, height }) => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => [height || "50%"], []);

  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        opacity={1}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  return (
    <View>
      <BottomSheetModal
        ref={modalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        style={{ padding: 20 }}
        backgroundStyle={{
          backgroundColor: "white",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        {children}
      </BottomSheetModal>
    </View>
  );
};

export default memo(CustomBottomSheetModal);

const styles = StyleSheet.create({});
