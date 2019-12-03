package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.PaymentDTO;
import com.ccpt.model.Payment;

@Mapper
public interface PaymentMapper extends BaseMapper<PaymentDTO, Payment, Integer> {
}
