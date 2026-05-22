function gamePriceForRank(index) {
  const price = 50000 * Math.pow(0.78, index);
  if (price >= 1000) return Math.round(price / 50) * 50;
  if (price >= 100) return Math.round(price / 5) * 5;
  if (price >= 10) return Math.round(price * 10) / 10;
  return Math.round(price * 100) / 100;
}

const FALLBACK_COINS = [
  ["bitcoin", "Bitcoin", "BTC", 107000, "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"],
  ["ethereum", "Ethereum", "ETH", 3600, "https://assets.coingecko.com/coins/images/279/large/ethereum.png"],
  ["binancecoin", "BNB", "BNB", 680, "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png"],
  ["solana", "Solana", "SOL", 170, "https://assets.coingecko.com/coins/images/4128/large/solana.png"],
  ["bitcoin-cash", "Bitcoin Cash", "BCH", 450, "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png"],
  ["monero", "Monero", "XMR", 380, "https://assets.coingecko.com/coins/images/69/large/monero_logo.png"],
  ["litecoin", "Litecoin", "LTC", 95, "https://assets.coingecko.com/coins/images/2/large/litecoin.png"],
  ["zcash", "Zcash", "ZEC", 58, "https://assets.coingecko.com/coins/images/486/large/circle-zcash-color.png"],
  ["dash", "Dash", "DASH", 32, "https://assets.coingecko.com/coins/images/19/large/dash-logo.png"],
  ["ethereum-classic", "Ethereum Classic", "ETC", 27, "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png"],
  ["avalanche-2", "Avalanche", "AVAX", 35, "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png"],
  ["near", "NEAR Protocol", "NEAR", 6, "https://assets.coingecko.com/coins/images/10365/large/near.jpg"],
  ["polkadot", "Polkadot", "DOT", 7, "https://assets.coingecko.com/coins/images/12171/large/polkadot.png"],
  ["aptos", "Aptos", "APT", 8, "https://assets.coingecko.com/coins/images/26455/large/aptos_round.png"],
  ["cosmos", "Cosmos Hub", "ATOM", 7, "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png"],
  ["filecoin", "Filecoin", "FIL", 5, "https://assets.coingecko.com/coins/images/12817/large/filecoin.png"],
  ["sui", "Sui", "SUI", 4, "https://assets.coingecko.com/coins/images/26375/large/sui-ocean-square.png"],
  ["internet-computer", "Internet Computer", "ICP", 11, "https://assets.coingecko.com/coins/images/14495/large/Internet_Computer_logo.png"],
  ["bittensor", "Bittensor", "TAO", 420, "https://assets.coingecko.com/coins/images/28452/large/ARUsPeNQ_400x400.jpeg"],
  ["kusama", "Kusama", "KSM", 22, "https://assets.coingecko.com/coins/images/9568/large/m4zRhP5e_400x400.jpg"],
  ["thorchain", "THORChain", "RUNE", 5, "https://assets.coingecko.com/coins/images/6595/large/Rune200x200.png"],
  ["toncoin", "Toncoin", "TON", 6, "https://assets.coingecko.com/coins/images/17980/large/ton_symbol.png"],
  ["cardano", "Cardano", "ADA", 0.7, "https://assets.coingecko.com/coins/images/975/large/cardano.png"],
  ["ripple", "XRP", "XRP", 0.55, "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png"],
  ["dogecoin", "Dogecoin", "DOGE", 0.16, "https://assets.coingecko.com/coins/images/5/large/dogecoin.png"],
  ["tron", "TRON", "TRX", 0.13, "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png"],
  ["stellar", "Stellar", "XLM", 0.11, "https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png"],
  ["kaspa", "Kaspa", "KAS", 0.15, "https://assets.coingecko.com/coins/images/25751/large/kaspa-icon-exchanges.png"],
  ["hedera-hashgraph", "Hedera", "HBAR", 0.09, "https://assets.coingecko.com/coins/images/3688/large/hbar.png"],
  ["algorand", "Algorand", "ALGO", 0.22, "https://assets.coingecko.com/coins/images/4380/large/download.png"],
  ["tezos", "Tezos", "XTZ", 0.95, "https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png"],
  ["iota", "IOTA", "IOTA", 0.23, "https://assets.coingecko.com/coins/images/692/large/IOTA_Swirl.png"],
  ["eos", "EOS", "EOS", 0.8, "https://assets.coingecko.com/coins/images/738/large/eos-eos-logo.png"],
  ["flow", "Flow", "FLOW", 0.75, "https://assets.coingecko.com/coins/images/13446/large/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png"],
  ["neo", "NEO", "NEO", 15, "https://assets.coingecko.com/coins/images/480/large/NEO_512_512.png"],
].map(([id, name, symbol, price, image], index) => ({
  id,
  name,
  symbol,
  market_cap: 30 - index,
  real_price: price,
  current_price: gamePriceForRank(index),
  image,
}));

const NATIVE_COIN_IDS = [
  "bitcoin",
  "ethereum",
  "binancecoin",
  "solana",
  "bitcoin-cash",
  "monero",
  "litecoin",
  "zcash",
  "dash",
  "ethereum-classic",
  "avalanche-2",
  "near",
  "polkadot",
  "aptos",
  "cosmos",
  "filecoin",
  "sui",
  "internet-computer",
  "bittensor",
  "kusama",
  "thorchain",
  "toncoin",
  "cardano",
  "ripple",
  "dogecoin",
  "tron",
  "stellar",
  "kaspa",
  "hedera-hashgraph",
  "algorand",
  "tezos",
  "iota",
  "eos",
  "flow",
  "neo",
];

const MAX_RANK = 30;
const MIN_SUCCESS = 10;
const MAX_SUCCESS = 100;
const START_MONEY_BUFFER = 18;
const PRICE_GAP_WEIGHT = 10;
const FAIL_TAUNTS = [
  "강화가 로켓처럼 터졌습니다. 화성은커녕 30등으로 귀환.",
  "차트가 아니라 계좌가 수직 낙하했습니다.",
  "방금 그 클릭, 월가에서는 손절이라고 부릅니다.",
  "축하합니다. 코인이 완벽하게 증발했습니다.",
  "일론도 엄지척. 이렇게 시원하게 터지긴 쉽지 않죠.",
  "강화 버튼이 아니라 청산 버튼이었나 봅니다.",
];

const state = {
  coins: FALLBACK_COINS.slice(0, MAX_RANK),
  currentIndex: MAX_RANK - 1,
  money: 0,
  shields: 0,
  busy: false,
};

const els = {
  upgradeCost: document.querySelector("#upgradeCost"),
  sellPrice: document.querySelector("#sellPrice"),
  coinImage: document.querySelector("#coinImage"),
  coinAura: document.querySelector("#coinAura"),
  coinName: document.querySelector("#coinName"),
  coinSymbol: document.querySelector("#coinSymbol"),
  successRate: document.querySelector("#successRate"),
  marketPrice: document.querySelector("#marketPrice"),
  upgradeButton: document.querySelector("#upgradeButton"),
  sellButton: document.querySelector("#sellButton"),
  money: document.querySelector("#money"),
  rankList: document.querySelector("#rankList"),
  toast: document.querySelector("#toast"),
  dataStatus: document.querySelector("#dataStatus"),
  shopButton: document.querySelector("#shopButton"),
  failOverlay: document.querySelector("#failOverlay"),
  failTaunt: document.querySelector("#failTaunt"),
  failCloseButton: document.querySelector("#failCloseButton"),
};

function formatUsd(value) {
  if (value >= 1000) return `$${Math.round(value).toLocaleString("en-US")}`;
  if (value >= 1) return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `$${value.toLocaleString("en-US", { maximumSignificantDigits: 4 })}`;
}

function currentRank() {
  return state.currentIndex + 1;
}

function stepFromStart() {
  return MAX_RANK - currentRank();
}

function roundUsd(value) {
  if (value >= 10000) return Math.round(value / 100) * 100;
  if (value >= 1000) return Math.round(value / 10) * 10;
  if (value >= 10) return Math.round(value);
  if (value >= 1) return Math.round(value * 10) / 10;
  return Math.round(value * 100000) / 100000;
}

function coinUsdPrice(index = state.currentIndex) {
  return roundUsd(state.coins[index].current_price);
}

function upgradePriceRatio() {
  if (currentRank() <= 1) return 1;
  const currentPrice = Math.max(state.coins[state.currentIndex].current_price, 0.00000001);
  const targetPrice = state.coins[state.currentIndex - 1].current_price;
  return Math.max(1, targetPrice / currentPrice);
}

function startingMoney() {
  const startCoinPrice = coinUsdPrice(MAX_RANK - 1);
  return roundUsd(Math.max(1000, startCoinPrice * START_MONEY_BUFFER));
}

function successRate() {
  if (currentRank() <= 1) return 0;
  if (currentRank() === MAX_RANK) return MAX_SUCCESS;
  const progress = stepFromStart() / (MAX_RANK - 2);
  const baseRate = MAX_SUCCESS - progress * (MAX_SUCCESS - MIN_SUCCESS);
  const rankFloor = MIN_SUCCESS + (1 - progress) * (MAX_SUCCESS - MIN_SUCCESS) * 0.55;
  const gapPenalty = Math.log2(upgradePriceRatio()) * PRICE_GAP_WEIGHT;
  const rate = baseRate - gapPenalty;
  return Math.round(Math.max(MIN_SUCCESS, rankFloor, Math.min(MAX_SUCCESS, rate)));
}

function upgradeCost() {
  if (currentRank() <= 1) return 0;
  const step = stepFromStart();
  const targetCoinPrice = coinUsdPrice(state.currentIndex - 1);
  const progress = step / (MAX_RANK - 2);
  const gapMultiplier = 1 + Math.log2(upgradePriceRatio()) * 0.35;
  const rate = (0.18 + progress * 0.27) * gapMultiplier;
  return roundUsd(Math.max(0.5, targetCoinPrice * rate));
}

function sellPrice() {
  if (currentRank() >= MAX_RANK - 1) return 0;
  return coinUsdPrice();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function showFailOverlay() {
  const taunt = FAIL_TAUNTS[Math.floor(Math.random() * FAIL_TAUNTS.length)];
  els.failTaunt.textContent = taunt;
  els.failOverlay.classList.add("show");
  els.failOverlay.setAttribute("aria-hidden", "false");
  window.clearTimeout(showFailOverlay.timer);
  showFailOverlay.timer = window.setTimeout(hideFailOverlay, 2300);
}

function hideFailOverlay() {
  els.failOverlay.classList.remove("show");
  els.failOverlay.setAttribute("aria-hidden", "true");
}

function animate(className) {
  els.coinAura.classList.remove("win-flash", "fail-shake");
  void els.coinAura.offsetWidth;
  els.coinAura.classList.add(className);
}

function renderRankList() {
  els.rankList.innerHTML = "";
  state.coins.forEach((coin, index) => {
    const li = document.createElement("li");
    li.className = index === state.currentIndex ? "current" : "";
    li.innerHTML = `
      <span>${index + 1}</span>
      <img src="${coin.image}" alt="" loading="lazy">
      <span class="rank-name">${coin.name}</span>
      <span class="rank-price">${formatUsd(coin.current_price)}</span>
    `;
    els.rankList.appendChild(li);
  });
}

function render() {
  const coin = state.coins[state.currentIndex];
  els.upgradeCost.textContent = formatUsd(upgradeCost());
  els.sellPrice.textContent = formatUsd(sellPrice());
  els.coinImage.src = coin.image;
  els.coinImage.alt = `${coin.name} 로고`;
  els.coinName.textContent = coin.name;
  els.coinSymbol.textContent = coin.symbol.toUpperCase();
  els.successRate.textContent = currentRank() === 1 ? "최종 성공" : `${successRate()}%`;
  els.marketPrice.textContent = formatUsd(coin.current_price);
  els.money.textContent = formatUsd(state.money);
  els.upgradeButton.disabled = state.busy || currentRank() === 1 || state.money < upgradeCost();
  els.sellButton.disabled = state.busy;
  els.upgradeButton.textContent = currentRank() === 1 ? "최고 코인" : "강화하기";
  renderRankList();
}

function upgrade() {
  if (state.busy || currentRank() === 1) return;
  const cost = upgradeCost();
  if (state.money < cost) {
    showToast("돈이 부족합니다. 판매해서 다시 도전하세요.");
    return;
  }

  state.money -= cost;
  const rate = successRate();
  const won = Math.random() * 100 < rate;

  if (won) {
    state.currentIndex -= 1;
    render();
    animate("win-flash");
    return;
  }

  state.currentIndex = MAX_RANK - 1;
  render();
  animate("fail-shake");
  showFailOverlay();
}

function sell() {
  if (state.busy) return;
  const coin = state.coins[state.currentIndex];
  const value = sellPrice();
  state.money += value;
  state.currentIndex = MAX_RANK - 1;
  showToast(`${coin.name} 판매: ${formatUsd(value)}`);
  render();
}

function normalizeCoins(rows) {
  return rows
    .filter((coin) => coin && coin.market_cap > 0 && coin.image && coin.name && coin.symbol)
    .sort((a, b) => b.market_cap - a.market_cap)
    .slice(0, MAX_RANK)
    .map((coin, index) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      market_cap: coin.market_cap,
      real_price: coin.current_price,
      current_price: gamePriceForRank(index),
      image: coin.image,
    }));
}

async function loadMarketData() {
  const ids = encodeURIComponent(NATIVE_COIN_IDS.join(","));

  try {
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=250&page=1&sparkline=false`, {
      headers: { accept: "application/json" },
    }).then((response) => {
      if (!response.ok) throw new Error(`CoinGecko ${response.status}`);
      return response.json();
    });
    const coins = normalizeCoins(data);
    if (coins.length === MAX_RANK) {
      state.coins = coins;
      state.currentIndex = MAX_RANK - 1;
      state.money = startingMoney();
      els.dataStatus.textContent = "CoinGecko 시가총액 기준";
    }
  } catch (error) {
    els.dataStatus.textContent = "내장 목록 기준";
  } finally {
    render();
  }
}

els.upgradeButton.addEventListener("click", upgrade);
els.sellButton.addEventListener("click", sell);
els.failOverlay.addEventListener("click", (event) => {
  if (event.target === els.failOverlay) hideFailOverlay();
});
els.failCloseButton.addEventListener("click", hideFailOverlay);
els.shopButton.addEventListener("click", () => showToast("상점은 다음 업데이트에서 열립니다."));

state.money = startingMoney();
render();
loadMarketData();
