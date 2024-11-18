// src/database/database.js
import SQLite from 'react-native-sqlite-storage';

const database_name = "MyApp.db";
const database_version = "1.0";
const database_displayname = "SQLite MyApp Database";
const database_size = 200000;

let db;

export const initDB = () => {
  db = SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size,
    () => {},
    error => {
      console.log("Error opening database: ", error);
    }
  );

  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, email TEXT, firstName TEXT, lastName TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS sellers (id INTEGER PRIMARY KEY AUTOINCREMENT, storeName TEXT, storeType TEXT, contactNumber TEXT, email TEXT, password TEXT, description TEXT, location TEXT);'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, sellerId INTEGER, FOREIGN KEY (sellerId) REFERENCES sellers(id));'
    );
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS searchHistory (id INTEGER PRIMARY KEY AUTOINCREMENT, query TEXT);'
    );
  });
};

export const addUser  = (username, password, email, firstName, lastName) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (username, password, email, firstName, lastName) VALUES (?, ?, ?, ?, ?);',
        [username, password, email, firstName, lastName],
        (tx, results) => {
          resolve(results);
        },
        (tx, error) => {
          reject(error);
        }
      );
    });
  });
};

// سایر

// src/database/database.js

export const addSeller = (storeName, storeType, contactNumber, email, password, description, location) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO sellers (storeName, storeType, contactNumber, email, password, description, location) VALUES (?, ?, ?, ?, ?, ?, ?);',
          [storeName, storeType, contactNumber, email, password, description, location],
          (tx, results) => {
            resolve(results);
          },
          (tx, error) => {
            reject(error);
          }
        );
      });
    });
  };
  
  export const addProduct = (name, price, sellerId) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO products (name, price, sellerId) VALUES (?, ?, ?);',
          [name, price, sellerId],
          (tx, results) => {
            resolve(results);
          },
          (tx, error) => {
            reject(error);
          }
        );
      });
    });
  };
  
  export const getProducts = (sellerId) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM products WHERE sellerId = ?;',
          [sellerId],
          (tx, results) => {
            const products = [];
            for (let i = 0; i < results.rows.length; i++) {
              products.push(results.rows.item(i));
            }
            resolve(products);
          },
          (tx, error) => {
            reject(error);
          }
        );
      });
    });
  };
  
  export const getSearchHistory = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM searchHistory;',
          [],
          (tx, results) => {
            const history = [];
            for (let i = 0; i < results.rows.length; i++) {
              history.push(results.rows.item(i));
            }
            resolve(history);
          },
          (tx, error) => {
            reject(error);
          }
        );
      });
    });
  };
  
  export const addSearchHistory = (query) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO searchHistory (query) VALUES (?);',
          [query],
          (tx, results) => {
            resolve(results);
          },
          (tx, error) => {
            reject(error);
          }
        );
      });
    });
  };

  // src/database/database.js
const users = [
    { id: 1, firstName: 'علی', lastName: 'احمدی', email: 'ali@example.com' },
    // سایر کاربران
  ];
  
  const sellers = [
    { id: 1, storeName: 'فروشگاه علی', storeType: 'الکترونیک', email: 'ali_store@example.com' },
    // سایر فروشندگان
  ];
  
  // تابع برای دریافت اطلاعات کاربر
  export const getUser Data = async () => {
    // در اینجا می‌توانید از API یا دیتابیس واقعی استفاده کنید
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users[0]); // به عنوان مثال، کاربر اول را برمی‌گرداند
      }, 1000);
    });
  };
  
  // تابع برای به‌روزرسانی اطلاعات کاربر
  export const updateUser  = async (userData) => {
    // در اینجا می‌توانید اطلاعات را در دیتابیس یا API به‌روزرسانی کنید
    return new Promise((resolve) => {
      setTimeout(() => {
        // به‌روزرسانی اطلاعات کاربر
        console.log('User  updated:', userData);
        resolve();
      }, 1000);
    });
  };
  
  // تابع برای دریافت اطلاعات فروشنده
  export const getSellerData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sellers[0]); // به عنوان مثال، فروشنده اول را برمی‌گرداند
      }, 1000);
    });
  };
  
  // تابع برای به‌روزرسانی اطلاعات فروشنده
  export const updateSeller = async (sellerData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Seller updated:', sellerData);
        resolve();
      }, 1000);
    });
  };
  
  // تابع برای جستجوی محصولات
  export const getProducts = async (query) => {
    // در اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
    // به عنوان مثال، یک آرایه از محصولات را برمی‌گرداند
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = [
          { id: 1, name: 'محصول 1', price: 10000 },
          { id: 2, name: 'محصول 2', price: 20000 },
          // سایر محصولات
        ];
              // فیلتر کردن محصولات بر اساس عبارت جستجو
      const filteredProducts = products.filter(product => 
        product.name.includes(query)
      );
      resolve(filteredProducts);
    }, 1000);
  });
};