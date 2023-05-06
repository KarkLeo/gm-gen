import React from "react";

export const FateChartDescription = () => {
  return (
    <div className="description">
      <h2>Как использовать таблицу случайностей</h2>
      <p>
        1: Сформулировать вопрос: Это должен быть вопрос, на который можно
        ответить <b>“да”</b> или <b>“нет”</b>
      </p>
      <p>
        2: Определить шансы: Прикиньте шансы того, что ответ будет <b>“да”</b>.
      </p>
      <p>
        3: Определить вероятность: На пересечении строки Шансов и столбца с
        текущим уровнем Хаоса найдите крупное число - это вероятность того, что
        ответ будет <b>“да”</b>, в цифрах.
      </p>
      <p>
        4: Бросок: Киньте <b>1D100</b>. Если вы кинули меньше или равно
        вероятности, ответ <b>“да”</b>. Если вы кинули больше, ответ{" "}
        <b>“нет”</b>. Если результат попал в нижнюю ⅕ диапазона (меньше левого
        маленького числа), у вас <b>экстраординарный успех</b>. Если результат
        попал в верхнюю ⅕ диапазона (больше правого маленького числа), у вас
        <b>экстраординарный облом</b>.
      </p>
      <p>
        5: Интерпретировать ответ: Выберите самую логичную интерпретацию
        результатов. Если не получается, задайте уточняющий вопрос и вернитесь к
        пункту 1.
      </p>
    </div>
  );
};