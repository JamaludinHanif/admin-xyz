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
import { currencyFormatter } from "../../config/currencyFormatter";

const PdfDocument = ({ dataPdf }) => {
  console.log("ini data pdf document", dataPdf);

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
    },
    container: {
      width: '21cm',
      minHeight: '29.7cm',
      padding: '2cm',
      margin: '0 auto',
      backgroundColor: '#FFF',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      backgroundColor: '#87ceeb', // Biru Muda
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      borderRadius: '5px 5px 0 0',
    },
    headerText: {
      margin: '0',
    },
    body: {
      padding: '20px',
    },
    item: {
      marginBottom: '10px',
    },
    itemText: {
      display: 'inline-block',
      width: '200px',
    },
    footer: {
      marginTop: '300px',
      padding: '20px',
      backgroundColor: '#4169e1', // Biru Agak Tua
      color: '#fff',
      borderRadius: '0 0 5px 5px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#63a4ff', // Warna aksen biru muda
      color: '#fff',
    },
    td: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
  });
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Invoice</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.item}>
                <Text>Invoice Number: INV-001</Text>
              </View>
              <View style={styles.item}>
                <Text>Date: February 18, 2024</Text>
              </View>
              <View style={styles.item}>
                <Text>Customer: John Doe</Text>
              </View>
              <View style={styles.item}>
                <Text>Address: 123 Main Street, Cityville</Text>
              </View>
              <View style={styles.item}>
                <Text>Email: john@example.com</Text>
              </View>
              <View style={styles.item}>
                <Text>Phone: 555-1234</Text>
              </View>
            </View>
            <View style={styles.tableContainer}>
              <Text>Products:</Text>
              {/* <table style={styles.table}>
                <thead style={styles.tableHeader}>
                  <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={styles.tableRow}>
                    <td>Product Name</td>
                    <td>1</td>
                    <td>$100.00</td>
                    <td>{currencyFormatter.format(dataPdf)}</td>
                  </tr>
                </tbody>
              </table> */}
            </View>
            <View style={styles.footer}>
              <Text>Thank you for your business!</Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PdfDocument;
