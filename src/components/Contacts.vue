ЖЖ<template>
  <section class="main">
    <div class="container">
      <div class="content__header">
        <h2 class="content__title">
          <span class="content__title-name">Контакты</span>
        </h2>
      </div>
      <div class="contacts">
        <div class="contacts__map">
          <div id="map" style="width: 100%; height: 100%"></div>
        </div>
        <div class="contacts__title">Адреса пунктов выдачи:</div>
        <div class="contacts__text">
          <ul class="contacts__list">
            <li class="contacts__item-name">Пункт выдачи №1</li>
            <li class="contacts__item">ул. Корабельная, д. 14, лит. А</li>
            <li class="contacts__item">Телефон: +7 (812) 955-32-41</li>
            <li class="contacts__item">
              <ul class="contacts__list">
                <li class="contacts__item"><b>Время работы:</b></li>
                <li class="contacts__item">Пн-Пт</li>
                <li class="contacts__item">09:00-18:00</li>
                <li class="contacts__item">Сб-Вс</li>
                <li class="contacts__item">11:00-22:00</li>
              </ul>
            </li>
          </ul>
          <ul class="contacts__list">
            <li class="contacts__item-name">Пункт выдачи №2</li>
            <li class="contacts__item">ул. Корабельная, д. 14, лит. А</li>
            <li class="contacts__item">Телефон: +7 (812) 955-32-41</li>
            <li class="contacts__item">
              <ul class="contacts__list">
                <li class="contacts__item"><b>Время работы:</b></li>
                <li class="contacts__item">Пн-Пт</li>
                <li class="contacts__item">09:00-18:00</li>
                <li class="contacts__item">Сб-Вс</li>
                <li class="contacts__item">11:00-22:00</li>
              </ul>
            </li>
          </ul>
          <ul class="contacts__list">
            <li class="contacts__item-name">Пункт выдачи №3</li>
            <li class="contacts__item">ул. Корабельная, д. 14, лит. А</li>
            <li class="contacts__item">Телефон: +7 (812) 955-32-41</li>
            <li class="contacts__item">
              <ul class="contacts__list">
                <li class="contacts__item"><b>Время работы:</b></li>
                <li class="contacts__item">Пн-Пт</li>
                <li class="contacts__item">09:00-18:00</li>
                <li class="contacts__item">Сб-Вс</li>
                <li class="contacts__item">11:00-22:00</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map(
          "map",
          {
            center: [59.987, 30.33],
            zoom: 10,
            controls: ['zoomControl']
          },
        ),
        myPieChart = new ymaps.Placemark();

      myMap.geoObjects
        .add(myPieChart)
        .add(
          new ymaps.Placemark(
            [59.98484, 30.385708],
            {
              iconCaption: "Пункт выдачи №1"
            },
            {
              preset: "islands#icon",
              iconColor: "#0095b6"
            }
          )
        )
        .add(
          new ymaps.Placemark(
            [60.002726, 30.276188],
            {
              iconCaption: "Пункт выдачи №2"
            },
            {
              preset: "islands#icon",
              iconColor: "#0095b6"
            }
          )
        )
        .add(
          new ymaps.Placemark(
            [59.962124, 30.288891],
            {
              iconCaption: "Пункт выдачи №3"
            },
            {
              preset: "islands#icon",
              iconColor: "#0095b6"
            }
          )
        );
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  &__header {
    padding: 40px 0;
  }

  &__title {
    &-name {
      font-weight: normal;
    }
  }
}
.contacts {
  border-top:1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  &__map {
    display: flex;
    width: 100%;
    height: 350px;
  }
  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  &__title {
    font-size: 20px;
    margin: 40px 0;
    text-align: center;
  }
  &__list {
    flex: 1;
  }
  &__item {
    &-name {
      font-weight: bold;
      margin-bottom: 10px;
    }
    margin-bottom: 8px;
  }
}
</style>