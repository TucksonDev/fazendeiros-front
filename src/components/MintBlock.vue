<script setup lang="ts">
    import { ref } from "vue";
    import { useWalletStore } from "@/helpers/wallet-store";
    import { chainName, networkIsValid } from "../constants";

    const wallet = useWalletStore();

    const connectDisconnectSwitch = async () => {
        if (wallet.state.isConnected && !networkIsValid(wallet.state.providerChainID)) {
            await wallet.checkWrongNetwork();
        } else if (wallet.state.isConnected) {
            wallet.disconnect();
        } else {
            await wallet.connect();
        }
    };

    const supplyLeft = ref(100);
    /*const getNewSupply = () => {
        return supplyLeft.value;
    };
    const updateSupply = () => {
        supplyLeft.value = getNewSupply();
        setTimeout(updateSupply, 5000);
    };
    updateSupply();*/
</script>

<template>
    <div id="mint-block" class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="section-title">{{ $t("mint.title") }}</h2>
                <h5 class="section-subtitle">{{ $t("mint.subtitle", { supplyLeft: supplyLeft }) }}</h5>
                <div class="section-intro mb-4">
                    {{ $t("mint.intro") }}
                </div>
                <div class="web3-actions">
                    <div v-if="wallet.state.isConnected && !networkIsValid(wallet.state.providerChainID)">
                        {{ $t("mint.wrongNetworkMessage") }}
                        <a class="btn btn-link" @click.stop="connectDisconnectSwitch">
                            ({{ $t("mint.switchNetworkMessage") }} {{ chainName }})
                        </a>
                    </div>
                    <div v-if="wallet.state.isConnected && networkIsValid(wallet.state.providerChainID)">
                        {{ $t("mint.connectedMessage") }}
                        {{
                            wallet.state.address.substring(0, 6) +
                            "..." +
                            wallet.state.address.substring(wallet.state.address.length - 6)
                        }}
                        <a class="btn btn-link" @click.stop="connectDisconnectSwitch">
                            ({{ $t("mint.disconnectButton") }})
                        </a>
                        <p>
                            <button class="btn btn-primary">{{ $t("mint.mintButton") }}</button>
                        </p>
                    </div>
                    <button
                        v-if="!wallet.state.isConnected"
                        class="btn btn-primary"
                        @click.stop="connectDisconnectSwitch"
                    >
                        {{ $t("mint.connectButton") }}
                    </button>
                </div>
            </div>
            <div class="col-lg-4 order-first order-lg-last">IMAGEN DEL TOKEN</div>
        </div>
    </div>
</template>

<style scoped>
    #mint-block {
        font-size: 1.25rem;
        background-color: var(--brand-gray);
        padding: 40px 40px;
        border-radius: 10px;
    }

    .web3-actions .btn-link {
        margin-bottom: 20px;
        padding: 0;
        vertical-align: top;
        font-size: 100%;
    }
</style>
