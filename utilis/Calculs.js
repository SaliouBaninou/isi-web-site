export const calculAndCompareDatas = (oldData, newData) => {
    if (oldData === 0 && newData === 0) {
        return { taux: 0, hausse: false };
    }

    if (oldData === 0) {
        return { taux: 100, hausse: true };
    }

    const difference = newData - oldData;
    const taux = (Math.abs(difference) / oldData) * 100;
    const hausse = newData >= oldData;

    return {
        taux: parseFloat(taux.toFixed(2)),
        hausse
    };
};

export function formatNumber(num) {
    if (num === null || num === undefined) return '0';

    const absNum = Math.abs(num);
    const sign = num < 0 ? '-' : '';

    if (absNum >= 1_000_000_000_000) {
        return `${sign}${(absNum / 1_000_000_000_000).toFixed(1)}T`;
    } else if (absNum >= 1_000_000_000) {
        return `${sign}${(absNum / 1_000_000_000).toFixed(1)}B`;
    } else if (absNum >= 1_000_000) {
        return `${sign}${(absNum / 1_000_000).toFixed(1)}M`;
    } else if (absNum >= 1_000) {
        return `${sign}${(absNum / 1_000).toFixed(1)}K`;
    } else {
        return `${num}`;
    }
}

