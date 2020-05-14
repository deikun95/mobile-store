<template>
  <div class="wrapper">
    <div class="promo">
      <div class="promo__img"></div>
    </div>

    <section class="section trend">
      <div class="container">
        <div class="title">
          <h2 class="title__name">Популярные товары</h2>
        </div>
        <div class="trend__content">
          <div class="card trend__content-card">
            <div class="card__img"></div>
            <div class="card__description">
              <div class="card__text">
                <span class="card__text-title">iPhone 11 Pro</span>
                <span class="card__text-price">
                  от
                  <b>69999 руб.</b>
                </span>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <div class="card__img"></div>
            <div class="card__description">
              <div class="card__text">
                <span class="card__text-title">iPhone 11 Pro</span>
                <span class="card__text-price">
                  от
                  <b>69999 руб.</b>
                </span>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <div class="card__img"></div>
            <div class="card__description">
              <div class="card__text">
                <span class="card__text-title">iPhone 11 Pro</span>
                <span class="card__text-price">
                  от
                  <b>69999 руб.</b>
                </span>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <div class="card__img"></div>
            <div class="card__description">
              <div class="card__text">
                <span class="card__text-title">iPhone 11 Pro</span>
                <span class="card__text-price">
                  от
                  <b>69999 руб.</b>
                </span>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <div class="card__img"></div>
            <div class="card__description">
              <div class="card__text">
                <span class="card__text-title">iPhone 11 Pro</span>
                <span class="card__text-price">
                  от
                  <b>69999 руб.</b>
                </span>
              </div>
            </div>
          </div>
          <div class="card trend__content-card">
            <div class="card__img"></div>
            <div class="card__description">
              <div class="card__text">
                <span class="card__text-title">iPhone 11 Pro</span>
                <span class="card__text-price">
                  от
                  <b>69999 руб.</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section news">
      <div class="container">
        <div class="title">
          <h2 class="title__name">Последние новости</h2>
        </div>
        <div class="news__content">
          <div class="news__card">
            <div class="news__card-img">
              <div class="news__text">Врачи спасли котенка с помощью iPhone</div>
            </div>
          </div>
          <div class="news__card">
            <div class="news__card-img">
              <div class="news__text">Врачи спасли котенка с помощью iPhone</div>
            </div>
          </div>
          <div class="news__card">
            <div class="news__card-img">
              <div class="news__text">Врачи спасли котенка с помощью iPhone</div>
            </div>
          </div>
        </div>
        <div class="more__btn-place">
          <button class="more__btn">Все новости</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.more {
  &__btn-place {
    margin: 5px 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__btn {
    outline: none;
    font-size: 15px;
    width: 145px;
    height: 45px;
    border: none;
    border-radius: 4px;
    background-color: #e6e6e6;
    transition: all 0.2s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
}
</style>