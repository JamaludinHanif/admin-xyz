import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { useState, useEffect, useRef } from "react";

const PdfDocument = ({dataPdf}) => {

    console.log('ini data pdf document', dataPdf)

    const styles = StyleSheet.create({
        page : {
        }
    })
  return (
    <>
    <Document>
        <Page style={styles.page}>
            <Text>{dataPdf}</Text>
        </Page>
    </Document>
    </>
  );
};

export default PdfDocument;
