function foo() {}

function DataTable(config = {}, data = []) {
  if (Object.keys(config).length === 0 && data.length === 0) return foo;

  if (document.querySelector(config.parent) !== null) {
    const table = document.createElement("table");

    document
      .querySelector(config.parent)
      .insertAdjacentElement("afterbegin", table);

    table.insertAdjacentHTML(
      "afterbegin",
      `
        <thead class="table__header">
        </thead>
        <tbody class="table__body"></tbody>`
    );

    const table__header = document.querySelector(".table__header");

    for (let key in config) {
      if (key === "columns") {
        table__header.insertAdjacentHTML(
          "beforeend",
          `<tr class="table__header__row">
        </tr>`
        );
        for (const column of config.columns) {
          const header = document.querySelector(".table__header__row");
          header.insertAdjacentHTML(
            "beforeend",
            `
          <th class="${column.value}">${column.title}</th>`
          );
        }
      }
    }

    const table__body = document.querySelector(".table__body");

    for (const user of users) {
      table__body.insertAdjacentHTML(
        "beforeend",
        `
      <tr class="table__body__row"></tr>
      `
      );
      for (const key in user) {
        const content = document.querySelector(".table__body__row:last-child");

        content.insertAdjacentHTML(
          "beforeend",
          `
        <td>${user[key]}</td>`
        );
      }
    }
  }
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "№", value: "id" },
    { title: "Ім’я", value: "name" },
    { title: "Прізвище", value: "surname" },
    { title: "Вік", value: "age" },
    { title: "Дата Народження", value: "dob" },
  ],
};

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12, dob: "12/01/2001" },
  { id: 30051, name: "Вася", surname: "Васечкін", age: 15, dob: "12/01/2001" },
  { id: 30052, name: "Вася", surname: "Васечкін", age: 15, dob: "12/01/2001" },
  { id: 30053, name: "Вася", surname: "Васечкін", age: 15, dob: "12/01/2001" },
  { id: 30054, name: "Вася", surname: "Васечкін", age: 15, dob: "12/01/2001" },
  { id: 30055, name: "Вася", surname: "Васечкін", age: 15, dob: "12/01/2001" },
];

DataTable(config1, users);
