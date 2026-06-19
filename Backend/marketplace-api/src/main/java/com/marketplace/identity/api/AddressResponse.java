package com.marketplace.identity.api;

import com.marketplace.identity.domain.Address;

public record AddressResponse(
        String street,
        String number,
        String complement,
        String neighborhood,
        String city,
        String state,
        String postalCode,
        String country
) {
    public static AddressResponse from(Address address) {
        if (address == null) {
            return null;
        }
        return new AddressResponse(address.getStreet(), address.getNumber(), address.getComplement(),
                address.getNeighborhood(), address.getCity(), address.getState(),
                address.getPostalCode(), address.getCountry());
    }
}
